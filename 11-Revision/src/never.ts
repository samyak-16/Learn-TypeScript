type Role = 'admin' | 'user';

function redirectBasedOnRole(role: Role): void {
  if (role === 'admin') {
    console.log('Redirecting to admin dashboard');
    return;
  }
  if (role === 'user') {
    console.log('Redirecting to user dashboard');
    return;
  }
  role; //! <--- Here type of role becomes never - and is used to check if the programmer missed to check any condition or not like admin or user or any other union which can be added in the future :)
}

function neverReturn(): never {
  //! never reaches the end of the function : )

  while (true) {}
}
