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
        createdAt: '2018-07-01T04:32:01.698Z',
        updatedAt: '2018-07-01T04:32:01.698Z',
      },
      {
        id: 2,
        sanskrit_name: 'Ardha Navasana',
        english_name: 'Half-Boat',
        img_url: 'https://www.dropbox.com/s/1nx0r94msxjwvyp/boatbentlegs.svg?raw=1',
        createdAt: '2018-07-01T04:32:01.770Z',
        updatedAt: '2018-07-01T04:32:01.770Z',
      },
      {
        id: 3,
        sanskrit_name: 'Dhanurasana',
        english_name: 'Bow',
        img_url: 'https://www.dropbox.com/s/wizj5kwxvez4c0a/bow.svg?raw=1',
        createdAt: '2018-07-01T04:32:01.809Z',
        updatedAt: '2018-07-01T04:32:01.809Z',
      },
      {
        id: 4,
        sanskrit_name: 'Setu Bandha Sarvangasana',
        english_name: 'Bridge',
        img_url: 'https://www.dropbox.com/s/f1w64ybg4sn8ejt/bridge.svg?raw=1',
        createdAt: '2018-07-01T04:32:01.833Z',
        updatedAt: '2018-07-01T04:32:01.833Z',
      },
      {
        id: 5,
        sanskrit_name: 'Baddha Konasana',
        english_name: 'Butterfly',
        img_url: 'https://www.dropbox.com/s/3h2pts6xbn28dh7/butterfly%3F.svg?raw=1',
        createdAt: '2018-07-01T04:32:01.849Z',
        updatedAt: '2018-07-01T04:32:01.849Z',
      },
      {
        id: 6,
        sanskrit_name: 'Ustrasana',
        english_name: 'Camel',
        img_url: 'https://www.dropbox.com/s/o5gr4lngltsdg5r/camel.svg?raw=1',
        createdAt: '2018-07-01T04:32:01.886Z',
        updatedAt: '2018-07-01T04:32:01.886Z',
      }, {
        id: 7,
        sanskrit_name: 'Marjaryasana',
        english_name: 'Cat',
        img_url: 'https://www.dropbox.com/s/cginnz98of2jpgr/cat.svg?raw=1',
        createdAt: '2018-07-01T04:32:01.915Z',
        updatedAt: '2018-07-01T04:32:01.915Z',
      },
      {
        id: 8,
        sanskrit_name: 'Bitilasana',
        english_name: 'Cow',
        img_url: 'https://www.dropbox.com/s/neau4ceai1rskh6/cow.svg?raw=1',
        createdAt: '2018-07-01T04:32:01.931Z',
        updatedAt: '2018-07-01T04:32:01.931Z',
      },
      {
        id: 9,
        sanskrit_name: 'Utkatasana',
        english_name: 'Chair',
        img_url: 'https://www.dropbox.com/s/9emlawz8vayk8bm/chair.svg?raw=1',
        createdAt: '2018-07-01T04:32:01.956Z',
        updatedAt: '2018-07-01T04:32:01.956Z',
      },
      {
        id: 10,
        sanskrit_name: 'Balasana',
        english_name: "Child's Pose",
        img_url: 'https://www.dropbox.com/s/ini3uwali0q5gxa/child.svg?raw=1',
        createdAt: '2018-07-01T04:32:01.994Z',
        updatedAt: '2018-07-01T04:32:01.994Z',
      },
      {
        id: 11,
        sanskrit_name: 'Sivasana',
        english_name: 'Corpse',
        img_url: 'https://www.dropbox.com/s/eohyx2crvtjvaxb/sivasana.svg?raw=1',
        createdAt: '2018-07-01T04:32:02.031Z',
        updatedAt: '2018-07-01T04:32:02.031Z',
      },
      {
        id: 12,
        sanskrit_name: 'Alanasana',
        english_name: 'Crescent Lunge',
        img_url: 'https://www.dropbox.com/s/1oc1dqv8mfwo8uj/highlunge.svg?raw=1',
        createdAt: '2018-07-01T04:32:02.050Z',
        updatedAt: '2018-07-01T04:32:02.050Z',
      },
      {
        id: 13,
        sanskrit_name: 'Bakasana',
        english_name: 'Crow',
        img_url: 'https://www.dropbox.com/s/ukaxoioh0uooswj/crow.svg?raw=1',
        createdAt: '2018-07-01T04:32:02.068Z',
        updatedAt: '2018-07-01T04:32:02.068Z',
      },
      {
        id: 14,
        sanskrit_name: 'Ardha Pincha Mayurasana',
        english_name: 'Dolphin',
        img_url: 'https://www.dropbox.com/s/px1foombb3v24se/dolphin.svg?raw=1',
        createdAt: '2018-07-01T04:32:02.091Z',
        updatedAt: '2018-07-01T04:32:02.091Z',
      },
      {
        id: 15,
        sanskrit_name: 'Adho Mukha Svanasana',
        english_name: 'Downward-Facing Dog',
        img_url: 'https://www.dropbox.com/s/75xa1bduu2u5y7d/downdog.svg?raw=1',
        createdAt: '2018-07-01T04:32:02.124Z',
        updatedAt: '2018-07-01T04:32:02.124Z',
      },
      {
        id: 16,
        sanskrit_name: 'Garudasana',
        english_name: 'Eagle',
        img_url: 'https://www.dropbox.com/s/w05qgx7wyxva1y3/eagle.svg?raw=1',
        createdAt: '2018-07-01T04:32:02.174Z',
        updatedAt: '2018-07-01T04:32:02.174Z',
      },
      {
        id: 17,
        sanskrit_name: 'Utthita Hasta Padangusthasana',
        english_name: 'Extended Hand to Toe',
        img_url: 'https://www.dropbox.com/s/0yk0z7f0a4ni37l/extendedhandtotoe.svg?raw=1',
        createdAt: '2018-07-01T04:32:02.216Z',
        updatedAt: '2018-07-01T04:32:02.216Z',
      },
      {
        id: 18,
        sanskrit_name: 'Utthita Parsvakonasana',
        english_name: 'Extended Side Angle',
        img_url: 'https://www.dropbox.com/s/yzynxmyb9o7eras/extendedsideangle.svg?raw=1',
        createdAt: '2018-07-01T04:32:02.254Z',
        updatedAt: '2018-07-01T04:32:02.254Z',
      },
      {
        id: 19,
        sanskrit_name: 'Pincha Mayurasana',
        english_name: 'Forearm Stand',
        img_url: 'https://www.dropbox.com/s/kjlyju4m91qgoi6/forearmstand.svg?raw=1',
        createdAt: '2018-07-01T04:32:02.286Z',
        updatedAt: '2018-07-01T04:32:02.286Z',
      },
      {
        id: 20,
        sanskrit_name: 'Uttanasana',
        english_name: 'Forward Bend with Shoulder Opener',
        img_url: 'https://www.dropbox.com/s/sjqfq99pqpelv4v/forwardfoldshoulderstretch.svg?raw=1',
        createdAt: '2018-07-01T04:32:02.309Z',
        updatedAt: '2018-07-01T04:32:02.309Z',
      },
      {
        id: 21,
        sanskrit_name: 'Ardha Chandrasana',
        english_name: 'Half-Moon',
        img_url: 'https://www.dropbox.com/s/gpumf9eehr8wo9g/halfmoon.svg?raw=1',
        createdAt: '2018-07-01T04:32:02.322Z',
        updatedAt: '2018-07-01T04:32:02.322Z',
      },
      {
        id: 22,
        sanskrit_name: 'Adho Mukha Vrksasana',
        english_name: 'Handstand',
        img_url: 'https://www.dropbox.com/s/p7pf5j0untktn9c/handstand.svg?raw=1',
        createdAt: '2018-07-01T04:32:02.356Z',
        updatedAt: '2018-07-01T04:32:02.356Z',
      },
      {
        id: 23,
        sanskrit_name: 'Anjaneyasana',
        english_name: 'Low Lunge',
        img_url: 'https://www.dropbox.com/s/h0ehjaz1wa9xfu1/lowlunge.svg?raw=1',
        createdAt: '2018-07-01T04:32:02.393Z',
        updatedAt: '2018-07-01T04:32:02.393Z',
      },
      {
        id: 24,
        sanskrit_name: 'Supta Kapotasana',
        english_name: 'Pigeon',
        img_url: 'https://www.dropbox.com/s/77peru289zm446u/pigeon.svg?raw=1',
        createdAt: '2018-07-01T04:32:02.409Z',
        updatedAt: '2018-07-01T04:32:02.409Z',
      },
      {
        id: 25,
        sanskrit_name: 'Eka Pada Rajakapotasana',
        english_name: 'King Pigeon',
        img_url: 'https://www.dropbox.com/s/10usd0gcqgy6o53/kingpigeon.svg?raw=1',
        createdAt: '2018-07-01T04:32:02.425Z',
        updatedAt: '2018-07-01T04:32:02.425Z',
      },
      {
        id: 26,
        sanskrit_name: 'Phalakasana',
        english_name: 'Plank',
        img_url: 'https://www.dropbox.com/s/jg6ge8zpaltx10f/plank.svg?raw=1',
        createdAt: '2018-07-01T04:32:02.450Z',
        updatedAt: '2018-07-01T04:32:02.450Z',
      },
      {
        id: 27,
        sanskrit_name: 'Halasana',
        english_name: 'Plow',
        img_url: 'https://www.dropbox.com/s/zi9231wbajm6d2m/plow.svg?raw=1',
        createdAt: '2018-07-01T04:32:02.484Z',
        updatedAt: '2018-07-01T04:32:02.484Z',
      },
      {
        id: 28,
        sanskrit_name: 'Parsvottanasana',
        english_name: 'Pyramid',
        img_url: 'https://www.dropbox.com/s/j7p2600bmf840e0/pyramid.svg?raw=1',
        createdAt: '2018-07-01T04:32:02.500Z',
        updatedAt: '2018-07-01T04:32:02.500Z',
      },
      {
        id: 29,
        sanskrit_name: 'Parsva Virabhadrasana',
        english_name: 'Reverse Warrior',
        img_url: 'https://www.dropbox.com/s/q6yn6cb9fglo0wp/reverswarrior.svg?raw=1',
        createdAt: '2018-07-01T04:32:02.526Z',
        updatedAt: '2018-07-01T04:32:02.526Z',
      },
      {
        id: 30,
        sanskrit_name: 'Paschimottanasana',
        english_name: 'Seated Forward Bend',
        img_url: 'https://www.dropbox.com/s/ji0otecqx42by00/seatedforwardfold.svg?raw=1',
        createdAt: '2018-07-01T04:32:02.553Z',
        updatedAt: '2018-07-01T04:32:02.553Z',
      },
      {
        id: 31,
        sanskrit_name: 'Padmasana',
        english_name: 'Lotus',
        img_url: 'https://www.dropbox.com/s/0oylivjwzuj5fnp/seatedORlotus.svg?raw=1',
        createdAt: '2018-07-01T04:32:02.582Z',
        updatedAt: '2018-07-01T04:32:02.582Z',
      },
      {
        id: 32,
        sanskrit_name: 'Ardha Matsyendrasana',
        english_name: 'Half Lord of the Fishes',
        img_url: 'https://www.dropbox.com/s/u9joi8lbntxumyh/seatedspinaltwist.svg?raw=1',
        createdAt: '2018-07-01T04:32:02.607Z',
        updatedAt: '2018-07-01T04:32:02.607Z',
      },
      {
        id: 33,
        sanskrit_name: 'Salamba Sarvangasana',
        english_name: 'Shoulder Stand',
        img_url: 'https://www.dropbox.com/s/tqj48exec3zub2u/shoulderstand.svg?raw=1',
        createdAt: '2018-07-01T04:32:02.635Z',
        updatedAt: '2018-07-01T04:32:02.635Z',
      },
      {
        id: 34,
        sanskrit_name: 'Vasisthasana',
        english_name: 'Side Plank',
        img_url: 'https://www.dropbox.com/s/w35ciia4u570xj8/sideplank.svg?raw=1',
        createdAt: '2018-07-01T04:32:02.660Z',
        updatedAt: '2018-07-01T04:32:02.660Z',
      },
      {
        id: 35,
        sanskrit_name: 'Salamba Bhujangasana',
        english_name: 'Sphinx',
        img_url: 'https://www.dropbox.com/s/cl8teqpf9yingwm/sphinx.svg?raw=1',
        createdAt: '2018-07-01T04:32:02.694Z',
        updatedAt: '2018-07-01T04:32:02.694Z',
      },
      {
        id: 36,
        sanskrit_name: 'Hanumanasana',
        english_name: 'Splits',
        img_url: 'https://www.dropbox.com/s/u8dxhc41hjfcxj6/splits.svg?raw=1',
        createdAt: '2018-07-01T04:32:02.717Z',
        updatedAt: '2018-07-01T04:32:02.717Z',
      },
      {
        id: 37,
        sanskrit_name: 'Malasana',
        english_name: 'Squat',
        img_url: 'https://www.dropbox.com/s/ntrwtdlr6tdkdxz/squat.svg?raw=1',
        createdAt: '2018-07-01T04:32:02.732Z',
        updatedAt: '2018-07-01T04:32:02.732Z',
      },
      {
        id: 38,
        sanskrit_name: 'Uttanasana',
        english_name: 'Standing Forward Bend',
        img_url: 'https://www.dropbox.com/s/u09snmhtposvaq0/standingforwardfold.svg?raw=1',
        createdAt: '2018-07-01T04:32:02.750Z',
        updatedAt: '2018-07-01T04:32:02.750Z',
      },
      {
        id: 39,
        sanskrit_name: 'Ashta Chandrasana',
        english_name: 'Crescent Moon',
        img_url: 'https://www.dropbox.com/s/9tv6z3qdcw2vg3a/standingstretch.svg?raw=1',
        createdAt: '2018-07-01T04:32:02.763Z',
        updatedAt: '2018-07-01T04:32:02.763Z',
      },
      {
        id: 40,
        sanskrit_name: 'Upavistha Konasana',
        english_name: 'Side Splits',
        img_url: 'https://www.dropbox.com/s/6z51vzosovhx5w7/straddlesplit.svg?raw=1',
        createdAt: '2018-07-01T04:32:02.790Z',
        updatedAt: '2018-07-01T04:32:02.790Z',
      },
      {
        id: 41,
        sanskrit_name: 'Vrksasana',
        english_name: 'Tree',
        img_url: 'https://www.dropbox.com/s/mn2ktlihp12mtfa/tree.svg?raw=1',
        createdAt: '2018-07-01T04:32:02.827Z',
        updatedAt: '2018-07-01T04:32:02.827Z',
      },
      {
        id: 42,
        sanskrit_name: 'Trikonasana',
        english_name: 'Triangle',
        img_url: 'https://www.dropbox.com/s/l41pfqjwmjoy5os/triangle.svg?raw=1',
        createdAt: '2018-07-01T04:32:02.849Z',
        updatedAt: '2018-07-01T04:32:02.849Z',
      },
      {
        id: 43,
        sanskrit_name: 'Urdhva Mukha Svsnssana',
        english_name: 'Upward-Facing Dog',
        img_url: 'https://www.dropbox.com/s/vnfx1srlwt1583t/updog.svg?raw=1',
        createdAt: '2018-07-01T04:32:02.871Z',
        updatedAt: '2018-07-01T04:32:02.871Z',
      },
      {
        id: 44,
        sanskrit_name: 'Virabhadrasana One',
        english_name: 'Warrior One',
        img_url: 'https://www.dropbox.com/s/j9fip5gm1o1l3fx/warrior1.svg?raw=1',
        createdAt: '2018-07-01T04:32:02.896Z',
        updatedAt: '2018-07-01T04:32:02.896Z',
      },
      {
        id: 45,
        sanskrit_name: 'Virabhadrasana Two',
        english_name: 'Warrior Two',
        img_url: 'https://www.dropbox.com/s/rsb3mx41dfq4otl/warrior2.svg?raw=1',
        createdAt: '2018-07-01T04:32:02.918Z',
        updatedAt: '2018-07-01T04:32:02.918Z',
      },
      {
        id: 46,
        sanskrit_name: 'Virabhadrasana Three',
        english_name: 'Warrior Three',
        img_url: 'https://www.dropbox.com/s/lwgoky3z37ameif/warrior3.svg?raw=1',
        createdAt: '2018-07-01T04:32:02.940Z',
        updatedAt: '2018-07-01T04:32:02.940Z',
      },
      {
        id: 47,
        sanskrit_name: 'Urdhva Dhanurasana',
        english_name: 'Wheel',
        img_url: 'https://www.dropbox.com/s/kpa1bewuut3lm5q/wheel.svg?raw=1',
        createdAt: '2018-07-01T04:32:02.971Z',
        updatedAt: '2018-07-01T04:32:02.971Z',
      },
      {
        id: 48,
        sanskrit_name: 'Camatkarasana',
        english_name: 'Wild Thing',
        img_url: 'https://www.dropbox.com/s/d1dbdvo4l7xry4w/downdogflip.svg?raw=1',
        createdAt: '2018-07-01T04:32:03.002Z',
        updatedAt: '2018-07-01T04:32:03.002Z',
      }],

      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Postures', null, {});
  },
};
