import {  Link } from 'react-router-dom';

interface FooterProps {
  activeItems: number;
  clearCompleted: () => void;
}

function Footer({ activeItems, clearCompleted }: FooterProps) {

  const handleClearCompleted = () => {
    clearCompleted();
  }

  return (
    <div className='footer'>
      <div>{activeItems} {activeItems === 1 ? 'item' : 'items'} left!</div>
      <div className='filter'>
        <div><Link to="/">All</Link></div>
        <div><Link to="/active">Active</Link></div>
        <div><Link to="/completed">Completed</Link></div>
      </div>
      <div className='clear-btn' onClick={handleClearCompleted}>Clear Completed</div>
    </div>
  )
}

export default Footer;