import styled from 'styled-components'

const Wrapper = styled.main`
  ${'' /* background-image: -webkit-linear-gradient(80deg, #F5E17B 30%, #fff 60%);height: 100%; */}
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -1.8rem;
    z-index: -100;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--main-300);
    }
  }
  p {
    color: var(--grey-600);
  }
  .main-img {
    display: none;
    margin-left:3rem;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      padding-top:50px;
      display: block;
    }
  }
`
export default Wrapper
