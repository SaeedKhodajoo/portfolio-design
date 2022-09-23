import styled from 'styled-components';

const PStyle = styled.div`
    max-width: 500px;
    margin: 0 auto;
    font-size: 1.8rem;
    line-height: 2.8rem;

    p{
      color: #ffffff;
    }

    @media only screen and (max-width:768px){
        font-size: 1.5rem;
    }
`

export default function PText(props) {
  return (
    <PStyle className='para'>
      <p>{props.children}</p>
    </PStyle>
  );
}
