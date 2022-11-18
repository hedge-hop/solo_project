/* const userSeqContainer = document.querySelector('.user-sequence');

userSeqContainer.addEventListener('click', async (e) => {
  try {
    if (e.target.name === 'choose') {
      console.log('button is working');
      window.location = '/allpostures';
      const AsanaAPIID = e.target.id;
      const UserID = e.target.dataset.userid;
      const data = { AsanaAPIID, UserID };

      const response = await fetch(`/addtofav/${AsanaAPIID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
    }
  } catch (error) {
    console.log(error);
  }
});
 */
