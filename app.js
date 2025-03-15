(() => {

  const friends     = [];
  const friendInput = document.getElementById('amigo');
  const friendList  = document.getElementById('listaAmigos');
  const result      = document.getElementById('resultado');

  const addFriend = () => {
    let friendName = friendInput.value.trim();

    if (!isValidName(friendName)) {
      return;
    }

    friendName = capitalizeFirstLetter(friendName);

    if (isDuplicateName(friendName)) {
      alert('Este nombre ya ha sido agregado.');
      return;
    }

    friends.push(friendName);
    friendInput.value = "";
    updateFriendList();
  };

  const drawFriend = () => {
    if (friends.length === 0) {
      alert('La lista está vacía. Por favor, agrega nombres primero.');
      return;
    }

    const randomIndex    = Math.floor(Math.random() * friends.length);
    const selectedFriend = friends[randomIndex];
    result.innerHTML     = `El amigo secreto es: <strong>${selectedFriend}</strong>`;
  };

  const updateFriendList = () => {
    friendList.innerHTML = "";
    for (const friend of friends) {
      const li = document.createElement('li');
      li.textContent = friend;
      friendList.appendChild(li);
    }
  };

  const isValidName = (name) => {
    if (/\d/.test(name)) {
      showModal('modal-numeros');
      return false;
    }
    if (/[^a-zA-Z\sáéíóúÁÉÍÓÚ]/.test(name)) {
      showModal('modal-simbolos');
      return false;
    }
    return true;
  };

  const capitalizeFirstLetter = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  };

  const isDuplicateName = (name) => {
    const normalizedNewName = normalizeString(name);
    return friends.some(friend => normalizeString(friend) === normalizedNewName);
  };

  const normalizeString = (str) => {
    // biome-ignore lint/suspicious/noMisleadingCharacterClass: <explanation>
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  };

  const showModal = (modalId) => {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
  };

  const closeModal = (modalId) => {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
  };

  document.querySelector('.button-add').addEventListener('click', addFriend);
  document.querySelector('.button-draw').addEventListener('click', drawFriend);

  friendInput.addEventListener('keypress', (event) => {
    if(event.key === 'Enter'){
      addFriend();
    }
  });

})();
