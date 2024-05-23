import PropTypes from 'prop-types';

function Account( { title, amount, balance }) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{balance}</p>
        </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  )
}

Account.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.string,
  balance: PropTypes.string
};

export default Account