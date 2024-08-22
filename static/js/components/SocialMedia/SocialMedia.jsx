import React from 'react';
import './socialMedia.scss';
import { socialMediaLinks } from "../../portfolio";
import styled from "styled-components";
import SocialMediaIcons from './SocialMediaIcons/SocialMediaIcons';


export default function SocialMedia() {
  return (
        <div className="social_media_div">
                <SocialMediaIcons/>
        </div>
  )
}
