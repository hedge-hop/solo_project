const containerForAll = document.querySelector('.mainContainerAll');

containerForAll.addEventListener('click', async (e) => {
  try {
    if (e.target.name === 'addtoseq') {
      console.log('button is working ADDDDD');
      const PostureID = e.target.id;
      const UserID = e.target.dataset.userid;
      const data = { PostureID, UserID };
      const response = await fetch(`/addtoseq/${PostureID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.status === 200) {
        const addBtn = e.target;
        addBtn.setAttribute('disable', true);
        addBtn.innerHTML = 'Added';
      } else {
        alert('Fail to add');
      }
    }
  } catch (error) {
    console.log(error);
  }
});

/*    const AsanaAPIID = e.target.id;
             const UserID = e.target.dataset.userid;
             const data = { AsanaAPIID, UserID }; */

/*  const response = await fetch(`/addtofav/${AsanaAPIID}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        }); */
