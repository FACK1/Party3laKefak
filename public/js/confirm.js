function confirmm(id) {
  const message = confirm('Are you sure you want to delete?');
  if (message) {
    fetch(`/service/${id}`, {
      method: 'delete',
    }).then((response) => {
      if (response.redirected) {
        window.location = response.url
      }
    });
  }
}
