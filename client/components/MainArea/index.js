
import React from 'react'
import { Flex, Box } from 'reflexbox'
import { Checkbox } from 'rebass'

// https://github.com/jxnblk/reflexbox
// https://github.com/jxnblk/rebass

const MainArea = ( props ) => {

  return (
      <Flex m={4} p={2} column={true} className='outline'>

        <Flex>
          <Box p={4} auto={true}>
            <h2>Prop Test</h2>
            <p>
              <span>key: <strong>hummus</strong>, </span><br />
              <span>value: <strong>{ `'${props.hummus.toString()}'` }</strong></span>
            </p>
          </Box>
          <Box p={4} auto={true}>
          <h2>Component Test</h2>
          <Checkbox
            checked={true}
            label="Check!!"
            name="checkbox_1"
            readOnly={true}
            theme="success"
          />
          </Box>
          <Box p={4} auto={true}>
            <h2>Made by</h2>
            <a href='http://github.com/hew'>
              <h3>@hew</h3>
            </a>
          </Box>
        </Flex>

        <div>
          { props.children }
        </div>

      </Flex>
  )
}

export default MainArea
