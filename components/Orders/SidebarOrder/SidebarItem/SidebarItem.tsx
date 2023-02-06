import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


export const SidebarItem = () => {
  return (
    <div className='active-shadow'>
      <div className='active'>
        <FontAwesomeIcon className="icon-active" icon={faEnvelope}  />
      </div>
    </div>
  )
}
