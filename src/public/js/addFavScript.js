const container = document.querySelector('.mainContainer');

container.addEventListener('click', async (e) => {
  try {
    if (e.target.name === 'addtofav') {
      const AsanaAPIID = e.target.id;
      const UserID = e.target.dataset.userid;
      const data = { AsanaAPIID, UserID };

      const response = await fetch(`/addtofav/${AsanaAPIID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.status === 200) {
        const addBtn = e.target;
        addBtn.setAttribute('disabled', true);
        addBtn.innerHTML = 'Added';
        alert('Added to your favourites!');
      } else {
        const addBtn = e.target;
        addBtn.setAttribute('disabled', true);
        alert('You already have one in your favorites');
      }
    }
  } catch (error) {
    console.log(error);
  }
});
