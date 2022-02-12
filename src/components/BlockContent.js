import React, { Fragment } from "react";
import styled from "styled-components";

const BlockContentWrapper = styled.div`
  margin-bottom: 2em;

  h2 {
    margin: 0 0 1em;
  }

  p {

  }
`

const BlockContent = (props) => {
  const { heading, children } = props;
  return <Fragment>
    <BlockContentWrapper className="hope-component-block-content">
      {
        heading ? <h4>{ heading }</h4> : ''
      }
      <div dangerouslySetInnerHTML={ { __html: children } }></div>
    </BlockContentWrapper>
  </Fragment>
}

export default BlockContent;