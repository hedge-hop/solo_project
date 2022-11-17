/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [{

      id: 1,
      name: 'Core Yoga Poses',
      short_name: 'core_yoga_poses',
      description: 'Engage your abdominal muscles with core yoga poses that build a strong and stable center like Boat Pose, Dolphin Pose and Side Plank Pose.',
      createdAt: '2018-07-01T04:32:01.589Z',
      updatedAt: '2018-07-01T04:32:01.589Z',
    },
    {
      id: 2,
      name: 'Seated Yoga Poses',
      short_name: 'seated_yoga_poses',
      description: 'Stay supple in your yoga practice with twisting asanas. Tone the belly, massage your internal organs, and relieve lower back pain in these seated yoga poses.',
      createdAt: '2018-07-01T04:32:01.596Z',
      updatedAt: '2018-07-01T04:32:01.596Z',
    },
    {
      id: 3,
      name: 'Strengthening Yoga Poses',
      short_name: 'strengthening_yoga_poses',
      description: 'Work and tone your entire body with strengthening yoga poses like Chair Pose, Warrior I Pose and Extended Side Angle Pose.',
      createdAt: '2018-07-01T04:32:01.601Z',
      updatedAt: '2018-07-01T04:32:01.601Z',
    },
    {
      id: 4,
      name: 'Chest Opening Yoga Poses',
      short_name: 'chest_opening_yoga_poses',
      description: 'Open your heart and shoulders in chest opening yoga poses like Camel Pose, Fish Pose and Wild Thing.',
      createdAt: '2018-07-01T04:32:01.606Z',
      updatedAt: '2018-07-01T04:32:01.606Z',
    },
    {
      id: 5,
      name: 'Yoga Backbend Poses',
      short_name: 'yoga_backbends',
      description: 'Discover the powerful effects of yoga backbends with step-by-step instructions, sequences, and expert advice to keep your practice pain-free.',
      createdAt: '2018-07-01T04:32:01.626Z',
      updatedAt: '2018-08-27T22:44:35.005Z',
    },
    {
      id: 6,
      name: 'Forward Bend Yoga Poses',
      short_name: 'forward_bend_yoga_poses',
      description: 'Learn how to work stiff muscles safely, promote lower-body flexibility, and find correct alignment with forward bend yoga poses.',
      createdAt: '2018-07-01T04:32:01.634Z',
      updatedAt: '2018-07-01T04:32:01.634Z',
    },
    {
      id: 7,
      name: 'Hip Opening Yoga Poses',
      short_name: 'hip_opening_yoga_poses',
      description: 'Loosen tight hips, improve your range of motion and circulation, alleviate back pain + more in these hip-opening yoga poses.',
      createdAt: '2018-07-01T04:32:01.646Z',
      updatedAt: '2018-07-01T04:32:01.646Z',
    },
    {
      id: 8,
      name: 'Standing Yoga Poses',
      short_name: 'standing_yoga_poses',
      description: 'Develop strength and stability in your standing poses, and feel the benefits throughout your practice.',
      createdAt: '2018-07-01T04:32:01.653Z',
      updatedAt: '2018-07-01T04:32:01.653Z',
    },
    {
      id: 9,
      name: 'Restorative Yoga Poses',
      short_name: 'restorative_yoga_poses',
      description: 'Restorative yoga focuses on winding down after a long day and relaxing your mind. At its core, this style focuses on body relaxation. You spend more time in fewer postures throughout the class. Many of the poses are modified to be easier and more relaxing. Like Iyengar, many props are used and are placed just right such as blankets, bolsters, and eye pillows. All of the props are there to help you sink deeper into relaxation. Restorative yoga also helps to cleanse and free your mind.',
      createdAt: '2018-07-01T04:32:01.663Z',
      updatedAt: '2018-07-01T04:32:01.663Z',
    },
    {
      id: 10,
      name: 'Arm Balance Yoga Poses',
      short_name: 'arm_balance_yoga_poses',
      description: 'Move past fear, build better balance, and strengthen your body with arm balance yoga poses like Crane Pose, Plank Pose, Firefly Pose + more.',
      createdAt: '2018-07-01T04:32:01.669Z',
      updatedAt: '2018-07-01T04:32:01.669Z',
    },
    {
      id: 11,
      name: 'Balancing Yoga Poses',
      short_name: 'balancing_yoga_poses',
      description: 'Build a strong foundation for your asana practice with these balancing yoga poses. Get step-by-step instructions and reap the benefits.',
      createdAt: '2018-07-01T04:32:01.674Z',
      updatedAt: '2018-07-01T04:32:01.674Z',
    },
    {
      id: 12,
      name: 'Inversion Yoga Poses',
      short_name: 'inversion_yoga_poses',
      description: 'Master inversions—overcome fear and discover how to defy gravity with these step-by-step instructions. Learn how to prepare for and stay safe in inversion yoga poses.',
      createdAt: '2018-07-01T04:32:01.678Z',
      updatedAt: '2018-07-01T04:32:01.678Z',
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
