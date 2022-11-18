const favContainer = document.querySelector('.fav-container');

favContainer.addEventListener('click', async (e) => {
  try {
    if (e.target.name === 'remove') {
      console.log('button is working');

      const PostureID = e.target.id;
      /* const UserID = e.target.dataset.userid;
      const data = { PostureID, UserID }; */

      const response = await fetch(`/userpage/${PostureID}`, {
        method: 'DELETE',
        /* headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data), */
      });
      if (response.status === 200) {
        const posToDelete = document.querySelector(`#posture${PostureID}`);
        posToDelete.remove();
      }
      // window.location = '/allpostures';
    }
  } catch (error) {
    console.log(error);
  }
});
