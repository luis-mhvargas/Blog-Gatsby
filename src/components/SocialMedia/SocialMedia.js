import React from "react"
import { Icon } from "semantic-ui-react"
import { map } from "lodash"
import socialData from "./data"
import "./SocialMedia.scss"

export default function SocialMedia() {
  return (
    <div className="social-media">
      {map(socialData, (social, index) => (
        <a href={social.link} target="_blank" rel="noopener noreferrer">
          <Icon circular link name={social.name} className={social.name} />
        </a>
      ))}
    </div>
  )
}