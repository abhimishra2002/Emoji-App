import React, { memo } from 'react'

import EmojisList from './EmojisList';

function MainComponent({categories}) {
  
  return (<React.Fragment>
    
    <EmojisList categories={categories}/>
  </React.Fragment>
    

  )
}

export default memo( MainComponent)