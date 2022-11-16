const container = document.querySelector('.mainContainer');
const addBtn = document.querySelector('.btn');

container.addEventListener('click', async (e) => {
  try {
    if (e.target.name === 'addtofav') {
      const AsanaAPIID = e.target.id;
      const UserID = e.target.dataset.userid;
      const data = { AsanaAPIID, UserID };
      console.log('USERID', UserID);
      console.log('AsanaAPIID', AsanaAPIID);

      // e.preventDefault();
      const response = await fetch(`/addtofav/${AsanaAPIID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      // const result = await response.json();

      if (response.status === 200) {
        addBtn.classList.add('disable');
        addBtn.innerHTML = 'Added';
        alert('Added to your favourites!');
      } else {
        alert('Fail to add');
      }
    }
  } catch (error) {
    console.log(error);
  }
});
