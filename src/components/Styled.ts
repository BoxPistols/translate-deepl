import styled from '@emotion/styled'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Main = styled.div`
  padding: 5rem 0;
`

export const Input = styled.input`
  border: 1px solid #999;
  min-width: 300px;
  padding: 8px 10px;
  margin: 8px 0;
`

export const Head4 = styled.h4`
  margin-top: 8px;
  font-size: 24px;
  font-weight: 400;
`

export const Footer = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FooterImage = styled.img`
  margin-left: 0.5rem;
`

export const FooterLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TitleLink = styled.a`
  color: #0070f3;
  text-decoration: none;

  &:hover,
  &:focus,
  &:active {
    text-decoration: underline;
  }
`

export const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  text-align: center;
`

export const Description = styled.p`
  line-height: 1.5;
  font-size: 1.5rem;
  text-align: center;
`

export const Code = styled.pre`
  background: #fafafa;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`

export const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  margin-top: 3rem;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`
