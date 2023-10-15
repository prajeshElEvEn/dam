import rclpy
from geometry_msgs.msg import PoseStamped


def main():
    rclpy.init()
    node = rclpy.create_node('move_drone_node')

    publisher = node.create_publisher(PoseStamped, '/goal_pose', 10)

    msg = PoseStamped()
    msg.header.frame_id = 'map'

    side_length = 5.0  # Adjust the side length of the square
    height = 2.0  # Assuming the desired height

    # Adjust the rate based on the desired speed of the drone
    rate = node.create_rate(1)

    for i in range(4):
        # Move forward
        msg.pose.position.x += side_length
        publisher.publish(msg)
        node.get_logger().info(
            f"Moving drone forward to: x={msg.pose.position.x}, y={msg.pose.position.y}")
        rate.sleep()

        # Turn
        msg.pose.position.x = msg.pose.position.x
        msg.pose.position.y += side_length
        publisher.publish(msg)
        node.get_logger().info(
            f"Moving drone to the right to: x={msg.pose.position.x}, y={msg.pose.position.y}")
        rate.sleep()

    node.destroy_node()
    rclpy.shutdown()


if __name__ == '__main__':
    main()
