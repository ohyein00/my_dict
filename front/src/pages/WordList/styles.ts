import styled from 'styled-components';
import Button from '../../styles/buttons';

export const WordContainer = styled.div`
  max-width: 1180px;
  padding: 100px 20px;
  box-sizing: border-box;
  margin: 0 auto;
`;
export const WordListFrame = styled.div`
  background: #fff;
  width: 100%;
  max-width: 1400px;
  border-radius: 20px 20px 0 0;
  padding: 20px 50px;
`;
export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.title}rem;
  font-weight: 500;
  width: 80%;
  text-align: left;
  padding-left: 50px;
  margin: 15px 0;
  color: #fff;
`;
export const FlexTitleBox = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.point_0};
  justify-content: space-between;
  margin: -20px -50px 0;
  border-radius: 20px 20px 0 0;
  align-items: center;
  border-bottom: 20px;
  padding-right: 50px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.point_0}; ;
`;
export const TopButton = styled(Button)`
  display: inline-block;
  width: 10%;
  font-weight: bold;
  background: #fff;
  color: #333;
`;
export const WordBoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const WordBoxGroup = styled.div`
  display: flex;
`;
