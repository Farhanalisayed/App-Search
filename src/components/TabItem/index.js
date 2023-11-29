// Write your code here
import './index.css'

const TabItem = props => {
  const {details, activatedTab, isActive} = props
  const {tabId, displayText} = details

  const clicked = () => {
    activatedTab(tabId)
  }

  const activeBtn = isActive ? 'active-btn' : ''
  return (
    <li>
      <button
        type="button"
        className={`tab-btn ${activeBtn}`}
        onClick={clicked}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
