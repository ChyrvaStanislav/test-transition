import React, { useRef } from 'react';
import styles from './Block.module.scss';
import { CSSTransition } from "react-transition-group";

const Block = ({isShow, hidePopup}) => {
  const containerRef = useRef(null);
  const backgroundRef = useRef(null);

  return (
    <>
      <CSSTransition
        in={ isShow }
        nodeRef={ containerRef }
        classNames={ {
          enterActive: styles.testShowing,
          enterDone: styles.testShowed,
          exitActive: styles.testHiding,
        } }

        timeout={300}
      >
        <div ref={ containerRef } className={ styles.test }>
          <p>HELLO</p>
        </div>
      </CSSTransition>
      {/*<CSSTransition*/ }
      {/*  in={isShow}*/ }
      {/*  nodeRef={backgroundRef}*/ }
      {/*  classNames={{*/ }
      {/*    enterActive: styles.backgroundShowing,*/ }
      {/*    enterDone: styles.backgroundShowed,*/ }
      {/*    exitActive: styles.backgroundHiding,*/ }
      {/*    exitDone: styles.backgroundHided,*/ }
      {/*  }}*/ }
      {/*  timeout={100}*/ }
      {/*>*/ }
      {/*  <div onClick={hidePopup} ref={backgroundRef} className={ styles.background } />*/ }
      {/*</CSSTransition>*/ }

      {/*<CSSTransition*/ }
      {/*  in={isShow}*/ }
      {/*  nodeRef={containerRef}*/ }
      {/*  classNames={{*/ }
      {/*    enterActive: styles.containerShowing,*/ }
      {/*    enterDone: styles.containerShowed,*/ }
      {/*    exitActive: styles.containerHiding,*/ }
      {/*    exitDone: styles.containerHided,*/ }
      {/*  }}*/ }
      {/*  timeout={400}*/ }
      {/*>*/ }
      {/*  <div ref={containerRef} className={ styles.container }> SOMETHING IMPORTANT</div>*/ }
      {/*</CSSTransition>*/ }
    </>
  )

}

export default Block;