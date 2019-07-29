import styled, { keyframes } from 'themes'

const rotateplane = keyframes`
  0% { transform: perspective(120px) rotateX(0deg) rotateY(0deg); }
	50% {
		transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
  }
	100% {
		transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
	}
`

const Spinner = styled.div`
  margin: 100px auto;
  animation: ${rotateplane} 1.2s infinite ease-in-out;
  background: ${({ theme: { colors } }) => colors.primary};
  width: 40px;
  height: 40px;
`

const Overlay = styled.div`
  background-color: rgba(51, 51, 51, 0.5);
  position: absolute;
  width: 100%;
  height: 100%;
`

const SpinnerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  transform: translateZ(0);
`

const Loading = () => (
  <SpinnerWrapper>
    <Overlay />
    <Spinner />
  </SpinnerWrapper>
)

export default Loading
