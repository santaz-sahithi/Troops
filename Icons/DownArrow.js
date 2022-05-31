function DownArrow({opacity}) {
    return (
      <div className='cursor-pointer'>
        <svg width="8" height="12" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 17V1" stroke="#FF8307" stroke-opacity="0.95" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1 10L8 17L15 10" stroke="#FF8307" stroke-opacity="0.95" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    );
  }
  
export default DownArrow;
  