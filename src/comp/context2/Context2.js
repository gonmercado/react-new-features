import React, { useContext, useEffect } from 'react';
import { TitleContext } from '../../titleContext';

class Context2 extends React.Component {
  componentDidMount() {
    this.context.changeTitle('titulo desde la clase de context 2')
  }

  render() {
    return (
      <div>Context page 2</div>
    )
  }
}

Context2.contextType = TitleContext;

export default Context2;




// import React, { useContext, useEffect } from 'react';
// import { TitleContext } from '../../titleContext';
//
// const Context2 = () => {
//   const titleContext = useContext(TitleContext);
//
//   useEffect(() => {
//     titleContext.changeTitle('Titulo Context 2');
//   });
//
//   return (
//     <div>Context page 2</div>
//   );
// };
//
// export default Context2;