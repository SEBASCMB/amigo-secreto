(() => {

  const friends     = [];
  const friendInput = document.getElementById('amigo');
  const friendList  = document.getElementById('listaAmigos');
  const result      = document.getElementById('resultado');

  document.querySelector('.button-add').addEventListener('click', () => {

    const friendName = friendInput.value.trim();

    if (friendName === "") {
      alert('Por favor, ingresa un nombre valido.');
      return;
    }

    if (friends.includes(friendName)) {
      alert('Este nombre ya ha sido agregado.');
      return;
    }

    friends.push(friendName);
    friendInput.value = "";
    updateFriendList();

  });

  document.querySelector('.button-draw').addEventListener('click', () => {

    if (friends.length === 0) {
      alert('La lista esta vacia. Por favor, agrega nombres primero.');
      return;
    }

    const randomIndex    = Math.floor(Math.random() * friends.length);
    const selectedFriend = friends[randomIndex];
    result.innerHTML     = `El amigo secreto es: <strong>${selectedFriend}</strong>`;

  });

  const updateFriendList = () => {

    friendList.innerHTML = "";
    for (const friend of friends) {
      const li = document.createElement('li');
      li.textContent = friend;
      friendList.appendChild(li);
    }

  }

})();
