import rclpy
from geometry_msgs.msg import PoseStamped
from math import cos, sin


def main():
    rclpy.init()
    node = rclpy.create_node('move_drone_node')

    publisher = node.create_publisher(PoseStamped, '/goal_pose', 10)

    msg = PoseStamped()
    msg.header.frame_id = 'map'

    radius = 5.0
    center_x = 0.0
    center_y = 0.0

    # Adjust the rate based on the desired speed of the drone
    rate = node.create_rate(1)

    time = 0
    while rclpy.ok():
        x = center_x + radius * cos(time)
        y = center_y + radius * sin(time)

        msg.pose.position.x = x
        msg.pose.position.y = y
        msg.pose.position.z = 2.0  # Assuming the desired height

        publisher.publish(msg)

        node.get_logger().info(f"Moving drone to: x={x}, y={y}")

        time += 0.1  # Adjust the increment value for speed and size of the loop
        rate.sleep()

    node.destroy_node()
    rclpy.shutdown()


if __name__ == '__main__':
    main
()
