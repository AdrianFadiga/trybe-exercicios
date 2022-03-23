import React from 'react';

class Register extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div className='register'>
        <h1>E-mails cadastrados:</h1>
        <ul>
          <li>{email}</li>
          </ul>
      </div>
    )
  }
}

export default Register;