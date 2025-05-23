import Button from '@mui/material/Button';
import styled from 'styled-components';

const ButtonDiv = styled.div`
    margin-top: 40px;
    margin-bottom: 40px;
`

export default function SubmitButton() {
  return (
    <ButtonDiv>
      <Button variant = "contained" style = {{textTransform: 'none'}}>Enter</Button>
    </ButtonDiv>
  );
}