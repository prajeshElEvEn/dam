from setuptools import find_packages, setup

package_name = 'pilot'

setup(
    name=package_name,
    version='0.0.0',
    packages=find_packages(exclude=['test']),
    data_files=[
        ('share/ament_index/resource_index/packages',
            ['resource/' + package_name]),
        ('share/' + package_name, ['package.xml']),
    ],
    install_requires=['setuptools'],
    zip_safe=True,
    maintainer='prajesh',
    maintainer_email='prajesh.eleven118@gmail.com',
    description='Drive drone autonomously',
    license='MIT',
    tests_require=['pytest'],
    entry_points={
        'console_scripts': [
            'square = pilot.square:main',
            'circle = pilot.circle:main'
        ],
    },
)
