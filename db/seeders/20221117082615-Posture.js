/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Postures',
      [{
        id: 1,
        sanskrit_name: 'Navasana',
        english_name: 'Boat',
        img_url: 'https://www.dropbox.com/s/4m64ztxkj8a4dab/boatstraightlegs.svg?raw=1',
        created_at: '2018-07-01T04:32:01.698Z',
        updated_at: '2018-07-01T04:32:01.698Z',
        yoga_categories: [{
          id: 1, name: 'Core Yoga Poses', short_name: 'core_yoga_poses', description: 'Engage your abdominal muscles with core yoga poses that build a strong and stable center like Boat Pose, Dolphin Pose and Side Plank Pose.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.589Z', updated_at: '2018-07-01T04:32:01.589Z',
        }, {
          id: 2, name: 'Seated Yoga Poses', short_name: 'seated_yoga_poses', description: 'Stay supple in your yoga practice with twisting asanas. Tone the belly, massage your internal organs, and relieve lower back pain in these seated yoga poses.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.596Z', updated_at: '2018-07-01T04:32:01.596Z',
        }, {
          id: 3, name: 'Strengthening Yoga Poses', short_name: 'strengthening_yoga_poses', description: 'Work and tone your entire body with strengthening yoga poses like Chair Pose, Warrior I Pose and Extended Side Angle Pose.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.601Z', updated_at: '2018-07-01T04:32:01.601Z',
        }],
      },
      {
        id: 2,
        sanskrit_name: 'Ardha Navasana',
        english_name: 'Half-Boat',
        img_url: 'https://www.dropbox.com/s/1nx0r94msxjwvyp/boatbentlegs.svg?raw=1',
        created_at: '2018-07-01T04:32:01.770Z',
        updated_at: '2018-07-01T04:32:01.770Z',
        yoga_categories: [{
          id: 1, name: 'Core Yoga Poses', short_name: 'core_yoga_poses', description: 'Engage your abdominal muscles with core yoga poses that build a strong and stable center like Boat Pose, Dolphin Pose and Side Plank Pose.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.589Z', updated_at: '2018-07-01T04:32:01.589Z',
        }, {
          id: 2, name: 'Seated Yoga Poses', short_name: 'seated_yoga_poses', description: 'Stay supple in your yoga practice with twisting asanas. Tone the belly, massage your internal organs, and relieve lower back pain in these seated yoga poses.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.596Z', updated_at: '2018-07-01T04:32:01.596Z',
        }, {
          id: 3, name: 'Strengthening Yoga Poses', short_name: 'strengthening_yoga_poses', description: 'Work and tone your entire body with strengthening yoga poses like Chair Pose, Warrior I Pose and Extended Side Angle Pose.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.601Z', updated_at: '2018-07-01T04:32:01.601Z',
        }],
      },
      {
        id: 3,
        sanskrit_name: 'Dhanurasana',
        english_name: 'Bow',
        img_url: 'https://www.dropbox.com/s/wizj5kwxvez4c0a/bow.svg?raw=1',
        created_at: '2018-07-01T04:32:01.809Z',
        updated_at: '2018-07-01T04:32:01.809Z',
        yoga_categories: [{
          id: 4, name: 'Chest Opening Yoga Poses', short_name: 'chest_opening_yoga_poses', description: 'Open your heart and shoulders in chest opening yoga poses like Camel Pose, Fish Pose and Wild Thing.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.606Z', updated_at: '2018-07-01T04:32:01.606Z',
        }, {
          id: 5, name: 'Yoga Backbend Poses', short_name: 'yoga_backbends', description: 'Discover the powerful effects of yoga backbends with step-by-step instructions, sequences, and expert advice to keep your practice pain-free.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.626Z', updated_at: '2018-08-27T22:44:35.005Z',
        }],
      },
      {
        id: 4,
        sanskrit_name: 'Setu Bandha Sarvangasana',
        english_name: 'Bridge',
        img_url: 'https://www.dropbox.com/s/f1w64ybg4sn8ejt/bridge.svg?raw=1',
        created_at: '2018-07-01T04:32:01.833Z',
        updated_at: '2018-07-01T04:32:01.833Z',
        yoga_categories: [{
          id: 5, name: 'Yoga Backbend Poses', short_name: 'yoga_backbends', description: 'Discover the powerful effects of yoga backbends with step-by-step instructions, sequences, and expert advice to keep your practice pain-free.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.626Z', updated_at: '2018-08-27T22:44:35.005Z',
        }],
      },
      {
        id: 5,
        sanskrit_name: 'Baddha Konasana',
        english_name: 'Butterfly',
        img_url: 'https://www.dropbox.com/s/3h2pts6xbn28dh7/butterfly%3F.svg?raw=1',
        created_at: '2018-07-01T04:32:01.849Z',
        updated_at: '2018-07-01T04:32:01.849Z',
        yoga_categories: [{
          id: 6, name: 'Forward Bend Yoga Poses', short_name: 'forward_bend_yoga_poses', description: 'Learn how to work stiff muscles safely, promote lower-body flexibility, and find correct alignment with forward bend yoga poses.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.634Z', updated_at: '2018-07-01T04:32:01.634Z',
        }, {
          id: 7, name: 'Hip Opening Yoga Poses', short_name: 'hip_opening_yoga_poses', description: 'Loosen tight hips, improve your range of motion and circulation, alleviate back pain + more in these hip-opening yoga poses.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.646Z', updated_at: '2018-07-01T04:32:01.646Z',
        }, {
          id: 2, name: 'Seated Yoga Poses', short_name: 'seated_yoga_poses', description: 'Stay supple in your yoga practice with twisting asanas. Tone the belly, massage your internal organs, and relieve lower back pain in these seated yoga poses.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.596Z', updated_at: '2018-07-01T04:32:01.596Z',
        }],
      },
      {
        id: 6,
        sanskrit_name: 'Ustrasana',
        english_name: 'Camel',
        img_url: 'https://www.dropbox.com/s/o5gr4lngltsdg5r/camel.svg?raw=1',
        created_at: '2018-07-01T04:32:01.886Z',
        updated_at: '2018-07-01T04:32:01.886Z',
        yoga_categories: [{
          id: 4, name: 'Chest Opening Yoga Poses', short_name: 'chest_opening_yoga_poses', description: 'Open your heart and shoulders in chest opening yoga poses like Camel Pose, Fish Pose and Wild Thing.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.606Z', updated_at: '2018-07-01T04:32:01.606Z',
        }, {
          id: 5, name: 'Yoga Backbend Poses', short_name: 'yoga_backbends', description: 'Discover the powerful effects of yoga backbends with step-by-step instructions, sequences, and expert advice to keep your practice pain-free.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.626Z', updated_at: '2018-08-27T22:44:35.005Z',
        }],
      }, {
        id: 7,
        sanskrit_name: 'Marjaryasana',
        english_name: 'Cat',
        img_url: 'https://www.dropbox.com/s/cginnz98of2jpgr/cat.svg?raw=1',
        created_at: '2018-07-01T04:32:01.915Z',
        updated_at: '2018-07-01T04:32:01.915Z',
        yoga_categories: [{
          id: 1, name: 'Core Yoga Poses', short_name: 'core_yoga_poses', description: 'Engage your abdominal muscles with core yoga poses that build a strong and stable center like Boat Pose, Dolphin Pose and Side Plank Pose.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.589Z', updated_at: '2018-07-01T04:32:01.589Z',
        }],
      },
      {
        id: 8,
        sanskrit_name: 'Bitilasana',
        english_name: 'Cow',
        img_url: 'https://www.dropbox.com/s/neau4ceai1rskh6/cow.svg?raw=1',
        created_at: '2018-07-01T04:32:01.931Z',
        updated_at: '2018-07-01T04:32:01.931Z',
        yoga_categories: [{
          id: 4, name: 'Chest Opening Yoga Poses', short_name: 'chest_opening_yoga_poses', description: 'Open your heart and shoulders in chest opening yoga poses like Camel Pose, Fish Pose and Wild Thing.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.606Z', updated_at: '2018-07-01T04:32:01.606Z',
        }, {
          id: 5, name: 'Yoga Backbend Poses', short_name: 'yoga_backbends', description: 'Discover the powerful effects of yoga backbends with step-by-step instructions, sequences, and expert advice to keep your practice pain-free.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.626Z', updated_at: '2018-08-27T22:44:35.005Z',
        }],
      },
      {
        id: 9,
        sanskrit_name: 'Utkatasana',
        english_name: 'Chair',
        img_url: 'https://www.dropbox.com/s/9emlawz8vayk8bm/chair.svg?raw=1',
        created_at: '2018-07-01T04:32:01.956Z',
        updated_at: '2018-07-01T04:32:01.956Z',
        yoga_categories: [{
          id: 1, name: 'Core Yoga Poses', short_name: 'core_yoga_poses', description: 'Engage your abdominal muscles with core yoga poses that build a strong and stable center like Boat Pose, Dolphin Pose and Side Plank Pose.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.589Z', updated_at: '2018-07-01T04:32:01.589Z',
        }, {
          id: 8, name: 'Standing Yoga Poses', short_name: 'standing_yoga_poses', description: 'Develop strength and stability in your standing poses, and feel the benefits throughout your practice.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.653Z', updated_at: '2018-07-01T04:32:01.653Z',
        }, {
          id: 3, name: 'Strengthening Yoga Poses', short_name: 'strengthening_yoga_poses', description: 'Work and tone your entire body with strengthening yoga poses like Chair Pose, Warrior I Pose and Extended Side Angle Pose.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.601Z', updated_at: '2018-07-01T04:32:01.601Z',
        }],
      },
      {
        id: 10,
        sanskrit_name: 'Balasana',
        english_name: "Child's Pose",
        img_url: 'https://www.dropbox.com/s/ini3uwali0q5gxa/child.svg?raw=1',
        created_at: '2018-07-01T04:32:01.994Z',
        updated_at: '2018-07-01T04:32:01.994Z',
        yoga_categories: [{
          id: 6, name: 'Forward Bend Yoga Poses', short_name: 'forward_bend_yoga_poses', description: 'Learn how to work stiff muscles safely, promote lower-body flexibility, and find correct alignment with forward bend yoga poses.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.634Z', updated_at: '2018-07-01T04:32:01.634Z',
        }, {
          id: 7, name: 'Hip Opening Yoga Poses', short_name: 'hip_opening_yoga_poses', description: 'Loosen tight hips, improve your range of motion and circulation, alleviate back pain + more in these hip-opening yoga poses.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.646Z', updated_at: '2018-07-01T04:32:01.646Z',
        }, {
          id: 9, name: 'Restorative Yoga Poses', short_name: 'restorative_yoga_poses', description: 'Restorative yoga focuses on winding down after a long day and relaxing your mind. At its core, this style focuses on body relaxation. You spend more time in fewer postures throughout the class. Many of the poses are modified to be easier and more relaxing. Like Iyengar, many props are used and are placed just right such as blankets, bolsters, and eye pillows. All of the props are there to help you sink deeper into relaxation. Restorative yoga also helps to cleanse and free your mind.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.663Z', updated_at: '2018-07-01T04:32:01.663Z',
        }],
      },
      {
        id: 11,
        sanskrit_name: 'Sivasana',
        english_name: 'Corpse',
        img_url: 'https://www.dropbox.com/s/eohyx2crvtjvaxb/sivasana.svg?raw=1',
        created_at: '2018-07-01T04:32:02.031Z',
        updated_at: '2018-07-01T04:32:02.031Z',
        yoga_categories: [{
          id: 9, name: 'Restorative Yoga Poses', short_name: 'restorative_yoga_poses', description: 'Restorative yoga focuses on winding down after a long day and relaxing your mind. At its core, this style focuses on body relaxation. You spend more time in fewer postures throughout the class. Many of the poses are modified to be easier and more relaxing. Like Iyengar, many props are used and are placed just right such as blankets, bolsters, and eye pillows. All of the props are there to help you sink deeper into relaxation. Restorative yoga also helps to cleanse and free your mind.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.663Z', updated_at: '2018-07-01T04:32:01.663Z',
        }],
      },
      {
        id: 12,
        sanskrit_name: 'Alanasana',
        english_name: 'Crescent Lunge',
        img_url: 'https://www.dropbox.com/s/1oc1dqv8mfwo8uj/highlunge.svg?raw=1',
        created_at: '2018-07-01T04:32:02.050Z',
        updated_at: '2018-07-01T04:32:02.050Z',
        yoga_categories: [{
          id: 8, name: 'Standing Yoga Poses', short_name: 'standing_yoga_poses', description: 'Develop strength and stability in your standing poses, and feel the benefits throughout your practice.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.653Z', updated_at: '2018-07-01T04:32:01.653Z',
        }],
      },
      {
        id: 13,
        sanskrit_name: 'Bakasana',
        english_name: 'Crow',
        img_url: 'https://www.dropbox.com/s/ukaxoioh0uooswj/crow.svg?raw=1',
        created_at: '2018-07-01T04:32:02.068Z',
        updated_at: '2018-07-01T04:32:02.068Z',
        yoga_categories: [{
          id: 1, name: 'Core Yoga Poses', short_name: 'core_yoga_poses', description: 'Engage your abdominal muscles with core yoga poses that build a strong and stable center like Boat Pose, Dolphin Pose and Side Plank Pose.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.589Z', updated_at: '2018-07-01T04:32:01.589Z',
        }, {
          id: 10, name: 'Arm Balance Yoga Poses', short_name: 'arm_balance_yoga_poses', description: 'Move past fear, build better balance, and strengthen your body with arm balance yoga poses like Crane Pose, Plank Pose, Firefly Pose + more.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.669Z', updated_at: '2018-07-01T04:32:01.669Z',
        }],
      },
      {
        id: 14,
        sanskrit_name: 'Ardha Pincha Mayurasana',
        english_name: 'Dolphin',
        img_url: 'https://www.dropbox.com/s/px1foombb3v24se/dolphin.svg?raw=1',
        created_at: '2018-07-01T04:32:02.091Z',
        updated_at: '2018-07-01T04:32:02.091Z',
        yoga_categories: [{
          id: 1, name: 'Core Yoga Poses', short_name: 'core_yoga_poses', description: 'Engage your abdominal muscles with core yoga poses that build a strong and stable center like Boat Pose, Dolphin Pose and Side Plank Pose.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.589Z', updated_at: '2018-07-01T04:32:01.589Z',
        }, {
          id: 8, name: 'Standing Yoga Poses', short_name: 'standing_yoga_poses', description: 'Develop strength and stability in your standing poses, and feel the benefits throughout your practice.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.653Z', updated_at: '2018-07-01T04:32:01.653Z',
        }, {
          id: 3, name: 'Strengthening Yoga Poses', short_name: 'strengthening_yoga_poses', description: 'Work and tone your entire body with strengthening yoga poses like Chair Pose, Warrior I Pose and Extended Side Angle Pose.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.601Z', updated_at: '2018-07-01T04:32:01.601Z',
        }],
      },
      {
        id: 15,
        sanskrit_name: 'Adho Mukha Svanasana',
        english_name: 'Downward-Facing Dog',
        img_url: 'https://www.dropbox.com/s/75xa1bduu2u5y7d/downdog.svg?raw=1',
        created_at: '2018-07-01T04:32:02.124Z',
        updated_at: '2018-07-01T04:32:02.124Z',
        yoga_categories: [{
          id: 6, name: 'Forward Bend Yoga Poses', short_name: 'forward_bend_yoga_poses', description: 'Learn how to work stiff muscles safely, promote lower-body flexibility, and find correct alignment with forward bend yoga poses.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.634Z', updated_at: '2018-07-01T04:32:01.634Z',
        }, {
          id: 8, name: 'Standing Yoga Poses', short_name: 'standing_yoga_poses', description: 'Develop strength and stability in your standing poses, and feel the benefits throughout your practice.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.653Z', updated_at: '2018-07-01T04:32:01.653Z',
        }, {
          id: 3, name: 'Strengthening Yoga Poses', short_name: 'strengthening_yoga_poses', description: 'Work and tone your entire body with strengthening yoga poses like Chair Pose, Warrior I Pose and Extended Side Angle Pose.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.601Z', updated_at: '2018-07-01T04:32:01.601Z',
        }],
      },
      {
        id: 16,
        sanskrit_name: 'Garudasana',
        english_name: 'Eagle',
        img_url: 'https://www.dropbox.com/s/w05qgx7wyxva1y3/eagle.svg?raw=1',
        created_at: '2018-07-01T04:32:02.174Z',
        updated_at: '2018-07-01T04:32:02.174Z',
        yoga_categories: [{
          id: 11, name: 'Balancing Yoga Poses', short_name: 'balancing_yoga_poses', description: 'Build a strong foundation for your asana practice with these balancing yoga poses. Get step-by-step instructions and reap the benefits.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.674Z', updated_at: '2018-07-01T04:32:01.674Z',
        }, {
          id: 7, name: 'Hip Opening Yoga Poses', short_name: 'hip_opening_yoga_poses', description: 'Loosen tight hips, improve your range of motion and circulation, alleviate back pain + more in these hip-opening yoga poses.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.646Z', updated_at: '2018-07-01T04:32:01.646Z',
        }, {
          id: 8, name: 'Standing Yoga Poses', short_name: 'standing_yoga_poses', description: 'Develop strength and stability in your standing poses, and feel the benefits throughout your practice.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.653Z', updated_at: '2018-07-01T04:32:01.653Z',
        }],
      },
      {
        id: 17,
        sanskrit_name: 'Utthita Hasta Padangusthasana',
        english_name: 'Extended Hand to Toe',
        img_url: 'https://www.dropbox.com/s/0yk0z7f0a4ni37l/extendedhandtotoe.svg?raw=1',
        created_at: '2018-07-01T04:32:02.216Z',
        updated_at: '2018-07-01T04:32:02.216Z',
        yoga_categories: [{
          id: 11, name: 'Balancing Yoga Poses', short_name: 'balancing_yoga_poses', description: 'Build a strong foundation for your asana practice with these balancing yoga poses. Get step-by-step instructions and reap the benefits.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.674Z', updated_at: '2018-07-01T04:32:01.674Z',
        }, {
          id: 7, name: 'Hip Opening Yoga Poses', short_name: 'hip_opening_yoga_poses', description: 'Loosen tight hips, improve your range of motion and circulation, alleviate back pain + more in these hip-opening yoga poses.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.646Z', updated_at: '2018-07-01T04:32:01.646Z',
        }, {
          id: 8, name: 'Standing Yoga Poses', short_name: 'standing_yoga_poses', description: 'Develop strength and stability in your standing poses, and feel the benefits throughout your practice.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.653Z', updated_at: '2018-07-01T04:32:01.653Z',
        }],
      },
      {
        id: 18,
        sanskrit_name: 'Utthita Parsvakonasana',
        english_name: 'Extended Side Angle',
        img_url: 'https://www.dropbox.com/s/yzynxmyb9o7eras/extendedsideangle.svg?raw=1',
        created_at: '2018-07-01T04:32:02.254Z',
        updated_at: '2018-07-01T04:32:02.254Z',
        yoga_categories: [{
          id: 8, name: 'Standing Yoga Poses', short_name: 'standing_yoga_poses', description: 'Develop strength and stability in your standing poses, and feel the benefits throughout your practice.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.653Z', updated_at: '2018-07-01T04:32:01.653Z',
        }, {
          id: 3, name: 'Strengthening Yoga Poses', short_name: 'strengthening_yoga_poses', description: 'Work and tone your entire body with strengthening yoga poses like Chair Pose, Warrior I Pose and Extended Side Angle Pose.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.601Z', updated_at: '2018-07-01T04:32:01.601Z',
        }],
      },
      {
        id: 19,
        sanskrit_name: 'Pincha Mayurasana',
        english_name: 'Forearm Stand',
        img_url: 'https://www.dropbox.com/s/kjlyju4m91qgoi6/forearmstand.svg?raw=1',
        created_at: '2018-07-01T04:32:02.286Z',
        updated_at: '2018-07-01T04:32:02.286Z',
        yoga_categories: [{
          id: 12, name: 'Inversion Yoga Poses', short_name: 'inversion_yoga_poses', description: 'Master inversions—overcome fear and discover how to defy gravity with these step-by-step instructions. Learn how to prepare for and stay safe in inversion yoga poses.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.678Z', updated_at: '2018-07-01T04:32:01.678Z',
        }, {
          id: 3, name: 'Strengthening Yoga Poses', short_name: 'strengthening_yoga_poses', description: 'Work and tone your entire body with strengthening yoga poses like Chair Pose, Warrior I Pose and Extended Side Angle Pose.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.601Z', updated_at: '2018-07-01T04:32:01.601Z',
        }],
      },
      {
        id: 20,
        sanskrit_name: 'Uttanasana',
        english_name: 'Forward Bend with Shoulder Opener',
        img_url: 'https://www.dropbox.com/s/sjqfq99pqpelv4v/forwardfoldshoulderstretch.svg?raw=1',
        created_at: '2018-07-01T04:32:02.309Z',
        updated_at: '2018-07-01T04:32:02.309Z',
        yoga_categories: [{
          id: 6, name: 'Forward Bend Yoga Poses', short_name: 'forward_bend_yoga_poses', description: 'Learn how to work stiff muscles safely, promote lower-body flexibility, and find correct alignment with forward bend yoga poses.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.634Z', updated_at: '2018-07-01T04:32:01.634Z',
        }],
      },
      {
        id: 21,
        sanskrit_name: 'Ardha Chandrasana',
        english_name: 'Half-Moon',
        img_url: 'https://www.dropbox.com/s/gpumf9eehr8wo9g/halfmoon.svg?raw=1',
        created_at: '2018-07-01T04:32:02.322Z',
        updated_at: '2018-07-01T04:32:02.322Z',
        yoga_categories: [{
          id: 11, name: 'Balancing Yoga Poses', short_name: 'balancing_yoga_poses', description: 'Build a strong foundation for your asana practice with these balancing yoga poses. Get step-by-step instructions and reap the benefits.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.674Z', updated_at: '2018-07-01T04:32:01.674Z',
        }, {
          id: 8, name: 'Standing Yoga Poses', short_name: 'standing_yoga_poses', description: 'Develop strength and stability in your standing poses, and feel the benefits throughout your practice.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.653Z', updated_at: '2018-07-01T04:32:01.653Z',
        }],
      },
      {
        id: 22,
        sanskrit_name: 'Adho Mukha Vrksasana',
        english_name: 'Handstand',
        img_url: 'https://www.dropbox.com/s/p7pf5j0untktn9c/handstand.svg?raw=1',
        created_at: '2018-07-01T04:32:02.356Z',
        updated_at: '2018-07-01T04:32:02.356Z',
        yoga_categories: [{
          id: 11, name: 'Balancing Yoga Poses', short_name: 'balancing_yoga_poses', description: 'Build a strong foundation for your asana practice with these balancing yoga poses. Get step-by-step instructions and reap the benefits.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.674Z', updated_at: '2018-07-01T04:32:01.674Z',
        }, {
          id: 12, name: 'Inversion Yoga Poses', short_name: 'inversion_yoga_poses', description: 'Master inversions—overcome fear and discover how to defy gravity with these step-by-step instructions. Learn how to prepare for and stay safe in inversion yoga poses.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.678Z', updated_at: '2018-07-01T04:32:01.678Z',
        }, {
          id: 3, name: 'Strengthening Yoga Poses', short_name: 'strengthening_yoga_poses', description: 'Work and tone your entire body with strengthening yoga poses like Chair Pose, Warrior I Pose and Extended Side Angle Pose.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.601Z', updated_at: '2018-07-01T04:32:01.601Z',
        }],
      },
      {
        id: 23,
        sanskrit_name: 'Anjaneyasana',
        english_name: 'Low Lunge',
        img_url: 'https://www.dropbox.com/s/h0ehjaz1wa9xfu1/lowlunge.svg?raw=1',
        created_at: '2018-07-01T04:32:02.393Z',
        updated_at: '2018-07-01T04:32:02.393Z',
        yoga_categories: [{
          id: 8, name: 'Standing Yoga Poses', short_name: 'standing_yoga_poses', description: 'Develop strength and stability in your standing poses, and feel the benefits throughout your practice.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.653Z', updated_at: '2018-07-01T04:32:01.653Z',
        }],
      },
      {
        id: 24,
        sanskrit_name: 'Supta Kapotasana',
        english_name: 'Pigeon',
        img_url: 'https://www.dropbox.com/s/77peru289zm446u/pigeon.svg?raw=1',
        created_at: '2018-07-01T04:32:02.409Z',
        updated_at: '2018-07-01T04:32:02.409Z',
        yoga_categories: [{
          id: 5, name: 'Yoga Backbend Poses', short_name: 'yoga_backbends', description: 'Discover the powerful effects of yoga backbends with step-by-step instructions, sequences, and expert advice to keep your practice pain-free.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.626Z', updated_at: '2018-08-27T22:44:35.005Z',
        }],
      },
      {
        id: 25,
        sanskrit_name: 'Eka Pada Rajakapotasana',
        english_name: 'King Pigeon',
        img_url: 'https://www.dropbox.com/s/10usd0gcqgy6o53/kingpigeon.svg?raw=1',
        created_at: '2018-07-01T04:32:02.425Z',
        updated_at: '2018-07-01T04:32:02.425Z',
        yoga_categories: [{
          id: 7, name: 'Hip Opening Yoga Poses', short_name: 'hip_opening_yoga_poses', description: 'Loosen tight hips, improve your range of motion and circulation, alleviate back pain + more in these hip-opening yoga poses.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.646Z', updated_at: '2018-07-01T04:32:01.646Z',
        }, {
          id: 5, name: 'Yoga Backbend Poses', short_name: 'yoga_backbends', description: 'Discover the powerful effects of yoga backbends with step-by-step instructions, sequences, and expert advice to keep your practice pain-free.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.626Z', updated_at: '2018-08-27T22:44:35.005Z',
        }],
      },
      {
        id: 26,
        sanskrit_name: 'Phalakasana',
        english_name: 'Plank',
        img_url: 'https://www.dropbox.com/s/jg6ge8zpaltx10f/plank.svg?raw=1',
        created_at: '2018-07-01T04:32:02.450Z',
        updated_at: '2018-07-01T04:32:02.450Z',
        yoga_categories: [{
          id: 10, name: 'Arm Balance Yoga Poses', short_name: 'arm_balance_yoga_poses', description: 'Move past fear, build better balance, and strengthen your body with arm balance yoga poses like Crane Pose, Plank Pose, Firefly Pose + more.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.669Z', updated_at: '2018-07-01T04:32:01.669Z',
        }, {
          id: 1, name: 'Core Yoga Poses', short_name: 'core_yoga_poses', description: 'Engage your abdominal muscles with core yoga poses that build a strong and stable center like Boat Pose, Dolphin Pose and Side Plank Pose.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.589Z', updated_at: '2018-07-01T04:32:01.589Z',
        }, {
          id: 3, name: 'Strengthening Yoga Poses', short_name: 'strengthening_yoga_poses', description: 'Work and tone your entire body with strengthening yoga poses like Chair Pose, Warrior I Pose and Extended Side Angle Pose.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.601Z', updated_at: '2018-07-01T04:32:01.601Z',
        }],
      },
      {
        id: 27,
        sanskrit_name: 'Halasana',
        english_name: 'Plow',
        img_url: 'https://www.dropbox.com/s/zi9231wbajm6d2m/plow.svg?raw=1',
        created_at: '2018-07-01T04:32:02.484Z',
        updated_at: '2018-07-01T04:32:02.484Z',
        yoga_categories: [{
          id: 12, name: 'Inversion Yoga Poses', short_name: 'inversion_yoga_poses', description: 'Master inversions—overcome fear and discover how to defy gravity with these step-by-step instructions. Learn how to prepare for and stay safe in inversion yoga poses.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.678Z', updated_at: '2018-07-01T04:32:01.678Z',
        }],
      },
      {
        id: 28,
        sanskrit_name: 'Parsvottanasana',
        english_name: 'Pyramid',
        img_url: 'https://www.dropbox.com/s/j7p2600bmf840e0/pyramid.svg?raw=1',
        created_at: '2018-07-01T04:32:02.500Z',
        updated_at: '2018-07-01T04:32:02.500Z',
        yoga_categories: [{
          id: 6, name: 'Forward Bend Yoga Poses', short_name: 'forward_bend_yoga_poses', description: 'Learn how to work stiff muscles safely, promote lower-body flexibility, and find correct alignment with forward bend yoga poses.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.634Z', updated_at: '2018-07-01T04:32:01.634Z',
        }, {
          id: 8, name: 'Standing Yoga Poses', short_name: 'standing_yoga_poses', description: 'Develop strength and stability in your standing poses, and feel the benefits throughout your practice.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.653Z', updated_at: '2018-07-01T04:32:01.653Z',
        }],
      },
      {
        id: 29,
        sanskrit_name: 'Parsva Virabhadrasana',
        english_name: 'Reverse Warrior',
        img_url: 'https://www.dropbox.com/s/q6yn6cb9fglo0wp/reverswarrior.svg?raw=1',
        created_at: '2018-07-01T04:32:02.526Z',
        updated_at: '2018-07-01T04:32:02.526Z',
        yoga_categories: [{
          id: 8, name: 'Standing Yoga Poses', short_name: 'standing_yoga_poses', description: 'Develop strength and stability in your standing poses, and feel the benefits throughout your practice.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.653Z', updated_at: '2018-07-01T04:32:01.653Z',
        }, {
          id: 3, name: 'Strengthening Yoga Poses', short_name: 'strengthening_yoga_poses', description: 'Work and tone your entire body with strengthening yoga poses like Chair Pose, Warrior I Pose and Extended Side Angle Pose.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.601Z', updated_at: '2018-07-01T04:32:01.601Z',
        }],
      },
      {
        id: 30,
        sanskrit_name: 'Paschimottanasana',
        english_name: 'Seated Forward Bend',
        img_url: 'https://www.dropbox.com/s/ji0otecqx42by00/seatedforwardfold.svg?raw=1',
        created_at: '2018-07-01T04:32:02.553Z',
        updated_at: '2018-07-01T04:32:02.553Z',
        yoga_categories: [{
          id: 6, name: 'Forward Bend Yoga Poses', short_name: 'forward_bend_yoga_poses', description: 'Learn how to work stiff muscles safely, promote lower-body flexibility, and find correct alignment with forward bend yoga poses.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.634Z', updated_at: '2018-07-01T04:32:01.634Z',
        }, {
          id: 2, name: 'Seated Yoga Poses', short_name: 'seated_yoga_poses', description: 'Stay supple in your yoga practice with twisting asanas. Tone the belly, massage your internal organs, and relieve lower back pain in these seated yoga poses.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.596Z', updated_at: '2018-07-01T04:32:01.596Z',
        }],
      },
      {
        id: 31,
        sanskrit_name: 'Padmasana',
        english_name: 'Lotus',
        img_url: 'https://www.dropbox.com/s/0oylivjwzuj5fnp/seatedORlotus.svg?raw=1',
        created_at: '2018-07-01T04:32:02.582Z',
        updated_at: '2018-07-01T04:32:02.582Z',
        yoga_categories: [{
          id: 2, name: 'Seated Yoga Poses', short_name: 'seated_yoga_poses', description: 'Stay supple in your yoga practice with twisting asanas. Tone the belly, massage your internal organs, and relieve lower back pain in these seated yoga poses.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.596Z', updated_at: '2018-07-01T04:32:01.596Z',
        }],
      },
      {
        id: 32,
        sanskrit_name: 'Ardha Matsyendrasana',
        english_name: 'Half Lord of the Fishes',
        img_url: 'https://www.dropbox.com/s/u9joi8lbntxumyh/seatedspinaltwist.svg?raw=1',
        created_at: '2018-07-01T04:32:02.607Z',
        updated_at: '2018-07-01T04:32:02.607Z',
        yoga_categories: [{
          id: 7, name: 'Hip Opening Yoga Poses', short_name: 'hip_opening_yoga_poses', description: 'Loosen tight hips, improve your range of motion and circulation, alleviate back pain + more in these hip-opening yoga poses.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.646Z', updated_at: '2018-07-01T04:32:01.646Z',
        }, {
          id: 2, name: 'Seated Yoga Poses', short_name: 'seated_yoga_poses', description: 'Stay supple in your yoga practice with twisting asanas. Tone the belly, massage your internal organs, and relieve lower back pain in these seated yoga poses.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.596Z', updated_at: '2018-07-01T04:32:01.596Z',
        }],
      },
      {
        id: 33,
        sanskrit_name: 'Salamba Sarvangasana',
        english_name: 'Shoulder Stand',
        img_url: 'https://www.dropbox.com/s/tqj48exec3zub2u/shoulderstand.svg?raw=1',
        created_at: '2018-07-01T04:32:02.635Z',
        updated_at: '2018-07-01T04:32:02.635Z',
        yoga_categories: [{
          id: 11, name: 'Balancing Yoga Poses', short_name: 'balancing_yoga_poses', description: 'Build a strong foundation for your asana practice with these balancing yoga poses. Get step-by-step instructions and reap the benefits.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.674Z', updated_at: '2018-07-01T04:32:01.674Z',
        }, {
          id: 12, name: 'Inversion Yoga Poses', short_name: 'inversion_yoga_poses', description: 'Master inversions—overcome fear and discover how to defy gravity with these step-by-step instructions. Learn how to prepare for and stay safe in inversion yoga poses.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.678Z', updated_at: '2018-07-01T04:32:01.678Z',
        }],
      },
      {
        id: 34,
        sanskrit_name: 'Vasisthasana',
        english_name: 'Side Plank',
        img_url: 'https://www.dropbox.com/s/w35ciia4u570xj8/sideplank.svg?raw=1',
        created_at: '2018-07-01T04:32:02.660Z',
        updated_at: '2018-07-01T04:32:02.660Z',
        yoga_categories: [{
          id: 10, name: 'Arm Balance Yoga Poses', short_name: 'arm_balance_yoga_poses', description: 'Move past fear, build better balance, and strengthen your body with arm balance yoga poses like Crane Pose, Plank Pose, Firefly Pose + more.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.669Z', updated_at: '2018-07-01T04:32:01.669Z',
        }, {
          id: 11, name: 'Balancing Yoga Poses', short_name: 'balancing_yoga_poses', description: 'Build a strong foundation for your asana practice with these balancing yoga poses. Get step-by-step instructions and reap the benefits.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.674Z', updated_at: '2018-07-01T04:32:01.674Z',
        }, {
          id: 1, name: 'Core Yoga Poses', short_name: 'core_yoga_poses', description: 'Engage your abdominal muscles with core yoga poses that build a strong and stable center like Boat Pose, Dolphin Pose and Side Plank Pose.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.589Z', updated_at: '2018-07-01T04:32:01.589Z',
        }],
      },
      {
        id: 35,
        sanskrit_name: 'Salamba Bhujangasana',
        english_name: 'Sphinx',
        img_url: 'https://www.dropbox.com/s/cl8teqpf9yingwm/sphinx.svg?raw=1',
        created_at: '2018-07-01T04:32:02.694Z',
        updated_at: '2018-07-01T04:32:02.694Z',
        yoga_categories: [{
          id: 4, name: 'Chest Opening Yoga Poses', short_name: 'chest_opening_yoga_poses', description: 'Open your heart and shoulders in chest opening yoga poses like Camel Pose, Fish Pose and Wild Thing.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.606Z', updated_at: '2018-07-01T04:32:01.606Z',
        }, {
          id: 5, name: 'Yoga Backbend Poses', short_name: 'yoga_backbends', description: 'Discover the powerful effects of yoga backbends with step-by-step instructions, sequences, and expert advice to keep your practice pain-free.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.626Z', updated_at: '2018-08-27T22:44:35.005Z',
        }],
      },
      {
        id: 36,
        sanskrit_name: 'Hanumanasana',
        english_name: 'Splits',
        img_url: 'https://www.dropbox.com/s/u8dxhc41hjfcxj6/splits.svg?raw=1',
        created_at: '2018-07-01T04:32:02.717Z',
        updated_at: '2018-07-01T04:32:02.717Z',
        yoga_categories: [{
          id: 2, name: 'Seated Yoga Poses', short_name: 'seated_yoga_poses', description: 'Stay supple in your yoga practice with twisting asanas. Tone the belly, massage your internal organs, and relieve lower back pain in these seated yoga poses.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.596Z', updated_at: '2018-07-01T04:32:01.596Z',
        }],
      },
      {
        id: 37,
        sanskrit_name: 'Malasana',
        english_name: 'Squat',
        img_url: 'https://www.dropbox.com/s/ntrwtdlr6tdkdxz/squat.svg?raw=1',
        created_at: '2018-07-01T04:32:02.732Z',
        updated_at: '2018-07-01T04:32:02.732Z',
        yoga_categories: [{
          id: 8, name: 'Standing Yoga Poses', short_name: 'standing_yoga_poses', description: 'Develop strength and stability in your standing poses, and feel the benefits throughout your practice.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.653Z', updated_at: '2018-07-01T04:32:01.653Z',
        }],
      },
      {
        id: 38,
        sanskrit_name: 'Uttanasana',
        english_name: 'Standing Forward Bend',
        img_url: 'https://www.dropbox.com/s/u09snmhtposvaq0/standingforwardfold.svg?raw=1',
        created_at: '2018-07-01T04:32:02.750Z',
        updated_at: '2018-07-01T04:32:02.750Z',
        yoga_categories: [{
          id: 6, name: 'Forward Bend Yoga Poses', short_name: 'forward_bend_yoga_poses', description: 'Learn how to work stiff muscles safely, promote lower-body flexibility, and find correct alignment with forward bend yoga poses.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.634Z', updated_at: '2018-07-01T04:32:01.634Z',
        }],
      },
      {
        id: 39,
        sanskrit_name: 'Ashta Chandrasana',
        english_name: 'Crescent Moon',
        img_url: 'https://www.dropbox.com/s/9tv6z3qdcw2vg3a/standingstretch.svg?raw=1',
        created_at: '2018-07-01T04:32:02.763Z',
        updated_at: '2018-07-01T04:32:02.763Z',
        yoga_categories: [{
          id: 11, name: 'Balancing Yoga Poses', short_name: 'balancing_yoga_poses', description: 'Build a strong foundation for your asana practice with these balancing yoga poses. Get step-by-step instructions and reap the benefits.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.674Z', updated_at: '2018-07-01T04:32:01.674Z',
        }, {
          id: 8, name: 'Standing Yoga Poses', short_name: 'standing_yoga_poses', description: 'Develop strength and stability in your standing poses, and feel the benefits throughout your practice.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.653Z', updated_at: '2018-07-01T04:32:01.653Z',
        }],
      },
      {
        id: 40,
        sanskrit_name: 'Upavistha Konasana',
        english_name: 'Side Splits',
        img_url: 'https://www.dropbox.com/s/6z51vzosovhx5w7/straddlesplit.svg?raw=1',
        created_at: '2018-07-01T04:32:02.790Z',
        updated_at: '2018-07-01T04:32:02.790Z',
        yoga_categories: [{
          id: 6, name: 'Forward Bend Yoga Poses', short_name: 'forward_bend_yoga_poses', description: 'Learn how to work stiff muscles safely, promote lower-body flexibility, and find correct alignment with forward bend yoga poses.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.634Z', updated_at: '2018-07-01T04:32:01.634Z',
        }, {
          id: 7, name: 'Hip Opening Yoga Poses', short_name: 'hip_opening_yoga_poses', description: 'Loosen tight hips, improve your range of motion and circulation, alleviate back pain + more in these hip-opening yoga poses.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.646Z', updated_at: '2018-07-01T04:32:01.646Z',
        }, {
          id: 2, name: 'Seated Yoga Poses', short_name: 'seated_yoga_poses', description: 'Stay supple in your yoga practice with twisting asanas. Tone the belly, massage your internal organs, and relieve lower back pain in these seated yoga poses.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.596Z', updated_at: '2018-07-01T04:32:01.596Z',
        }],
      },
      {
        id: 41,
        sanskrit_name: 'Vrksasana',
        english_name: 'Tree',
        img_url: 'https://www.dropbox.com/s/mn2ktlihp12mtfa/tree.svg?raw=1',
        created_at: '2018-07-01T04:32:02.827Z',
        updated_at: '2018-07-01T04:32:02.827Z',
        yoga_categories: [{
          id: 11, name: 'Balancing Yoga Poses', short_name: 'balancing_yoga_poses', description: 'Build a strong foundation for your asana practice with these balancing yoga poses. Get step-by-step instructions and reap the benefits.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.674Z', updated_at: '2018-07-01T04:32:01.674Z',
        }, {
          id: 8, name: 'Standing Yoga Poses', short_name: 'standing_yoga_poses', description: 'Develop strength and stability in your standing poses, and feel the benefits throughout your practice.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.653Z', updated_at: '2018-07-01T04:32:01.653Z',
        }],
      },
      {
        id: 42,
        sanskrit_name: 'Trikonasana',
        english_name: 'Triangle',
        img_url: 'https://www.dropbox.com/s/l41pfqjwmjoy5os/triangle.svg?raw=1',
        created_at: '2018-07-01T04:32:02.849Z',
        updated_at: '2018-07-01T04:32:02.849Z',
        yoga_categories: [{
          id: 8, name: 'Standing Yoga Poses', short_name: 'standing_yoga_poses', description: 'Develop strength and stability in your standing poses, and feel the benefits throughout your practice.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.653Z', updated_at: '2018-07-01T04:32:01.653Z',
        }, {
          id: 3, name: 'Strengthening Yoga Poses', short_name: 'strengthening_yoga_poses', description: 'Work and tone your entire body with strengthening yoga poses like Chair Pose, Warrior I Pose and Extended Side Angle Pose.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.601Z', updated_at: '2018-07-01T04:32:01.601Z',
        }],
      },
      {
        id: 43,
        sanskrit_name: 'Urdhva Mukha Svsnssana',
        english_name: 'Upward-Facing Dog',
        img_url: 'https://www.dropbox.com/s/vnfx1srlwt1583t/updog.svg?raw=1',
        created_at: '2018-07-01T04:32:02.871Z',
        updated_at: '2018-07-01T04:32:02.871Z',
        yoga_categories: [{
          id: 4, name: 'Chest Opening Yoga Poses', short_name: 'chest_opening_yoga_poses', description: 'Open your heart and shoulders in chest opening yoga poses like Camel Pose, Fish Pose and Wild Thing.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.606Z', updated_at: '2018-07-01T04:32:01.606Z',
        }, {
          id: 5, name: 'Yoga Backbend Poses', short_name: 'yoga_backbends', description: 'Discover the powerful effects of yoga backbends with step-by-step instructions, sequences, and expert advice to keep your practice pain-free.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.626Z', updated_at: '2018-08-27T22:44:35.005Z',
        }],
      },
      {
        id: 44,
        sanskrit_name: 'Virabhadrasana One',
        english_name: 'Warrior One',
        img_url: 'https://www.dropbox.com/s/j9fip5gm1o1l3fx/warrior1.svg?raw=1',
        created_at: '2018-07-01T04:32:02.896Z',
        updated_at: '2018-07-01T04:32:02.896Z',
        yoga_categories: [{
          id: 8, name: 'Standing Yoga Poses', short_name: 'standing_yoga_poses', description: 'Develop strength and stability in your standing poses, and feel the benefits throughout your practice.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.653Z', updated_at: '2018-07-01T04:32:01.653Z',
        }, {
          id: 3, name: 'Strengthening Yoga Poses', short_name: 'strengthening_yoga_poses', description: 'Work and tone your entire body with strengthening yoga poses like Chair Pose, Warrior I Pose and Extended Side Angle Pose.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.601Z', updated_at: '2018-07-01T04:32:01.601Z',
        }],
      },
      {
        id: 45,
        sanskrit_name: 'Virabhadrasana Two',
        english_name: 'Warrior Two',
        img_url: 'https://www.dropbox.com/s/rsb3mx41dfq4otl/warrior2.svg?raw=1',
        created_at: '2018-07-01T04:32:02.918Z',
        updated_at: '2018-07-01T04:32:02.918Z',
        yoga_categories: [{
          id: 8, name: 'Standing Yoga Poses', short_name: 'standing_yoga_poses', description: 'Develop strength and stability in your standing poses, and feel the benefits throughout your practice.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.653Z', updated_at: '2018-07-01T04:32:01.653Z',
        }, {
          id: 3, name: 'Strengthening Yoga Poses', short_name: 'strengthening_yoga_poses', description: 'Work and tone your entire body with strengthening yoga poses like Chair Pose, Warrior I Pose and Extended Side Angle Pose.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.601Z', updated_at: '2018-07-01T04:32:01.601Z',
        }],
      },
      {
        id: 46,
        sanskrit_name: 'Virabhadrasana Three',
        english_name: 'Warrior Three',
        img_url: 'https://www.dropbox.com/s/lwgoky3z37ameif/warrior3.svg?raw=1',
        created_at: '2018-07-01T04:32:02.940Z',
        updated_at: '2018-07-01T04:32:02.940Z',
        yoga_categories: [{
          id: 11, name: 'Balancing Yoga Poses', short_name: 'balancing_yoga_poses', description: 'Build a strong foundation for your asana practice with these balancing yoga poses. Get step-by-step instructions and reap the benefits.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.674Z', updated_at: '2018-07-01T04:32:01.674Z',
        }, {
          id: 8, name: 'Standing Yoga Poses', short_name: 'standing_yoga_poses', description: 'Develop strength and stability in your standing poses, and feel the benefits throughout your practice.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.653Z', updated_at: '2018-07-01T04:32:01.653Z',
        }, {
          id: 3, name: 'Strengthening Yoga Poses', short_name: 'strengthening_yoga_poses', description: 'Work and tone your entire body with strengthening yoga poses like Chair Pose, Warrior I Pose and Extended Side Angle Pose.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.601Z', updated_at: '2018-07-01T04:32:01.601Z',
        }],
      },
      {
        id: 47,
        sanskrit_name: 'Urdhva Dhanurasana',
        english_name: 'Wheel',
        img_url: 'https://www.dropbox.com/s/kpa1bewuut3lm5q/wheel.svg?raw=1',
        created_at: '2018-07-01T04:32:02.971Z',
        updated_at: '2018-07-01T04:32:02.971Z',
        yoga_categories: [{
          id: 4, name: 'Chest Opening Yoga Poses', short_name: 'chest_opening_yoga_poses', description: 'Open your heart and shoulders in chest opening yoga poses like Camel Pose, Fish Pose and Wild Thing.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.606Z', updated_at: '2018-07-01T04:32:01.606Z',
        }, {
          id: 3, name: 'Strengthening Yoga Poses', short_name: 'strengthening_yoga_poses', description: 'Work and tone your entire body with strengthening yoga poses like Chair Pose, Warrior I Pose and Extended Side Angle Pose.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.601Z', updated_at: '2018-07-01T04:32:01.601Z',
        }, {
          id: 5, name: 'Yoga Backbend Poses', short_name: 'yoga_backbends', description: 'Discover the powerful effects of yoga backbends with step-by-step instructions, sequences, and expert advice to keep your practice pain-free.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.626Z', updated_at: '2018-08-27T22:44:35.005Z',
        }],
      },
      {
        id: 48,
        sanskrit_name: 'Camatkarasana',
        english_name: 'Wild Thing',
        img_url: 'https://www.dropbox.com/s/d1dbdvo4l7xry4w/downdogflip.svg?raw=1',
        created_at: '2018-07-01T04:32:03.002Z',
        updated_at: '2018-07-01T04:32:03.002Z',
        yoga_categories: [{
          id: 10, name: 'Arm Balance Yoga Poses', short_name: 'arm_balance_yoga_poses', description: 'Move past fear, build better balance, and strengthen your body with arm balance yoga poses like Crane Pose, Plank Pose, Firefly Pose + more.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.669Z', updated_at: '2018-07-01T04:32:01.669Z',
        }, {
          id: 4, name: 'Chest Opening Yoga Poses', short_name: 'chest_opening_yoga_poses', description: 'Open your heart and shoulders in chest opening yoga poses like Camel Pose, Fish Pose and Wild Thing.', parent_yoga_category_id: null, created_at: '2018-07-01T04:32:01.606Z', updated_at: '2018-07-01T04:32:01.606Z',
        }],
      }],

      {},
    );

    /**
     *
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};