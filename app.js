document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('reservation-form');
  const confirmation = document.getElementById('confirmation');
  const newReservationBtn = document.getElementById('new-reservation');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    // 簡易バリデーション（HTML5で十分ですが念のため）
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const date = form.date.value;
    const time = form.time.value;
    if (!name || !email || !date || !time) {
      alert('Please fill in all fields.');
      return;
    }
    // 予約完了画面へ
    form.classList.add('hidden');
    confirmation.classList.remove('hidden');
  });

  newReservationBtn.addEventListener('click', function () {
    form.reset();
    confirmation.classList.add('hidden');
    form.classList.remove('hidden');
  });
}); 