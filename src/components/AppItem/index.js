// Write your code here
import './index.css'

const AppItem = props => {
  const {details} = props
  const {appId, appName, imageUrl, category} = details

  return (
    <li className="list">
      <img src={imageUrl} className="image" alt={appName} />
      <p className="name">{appName}</p>
    </li>
  )
}
export default AppItem
