import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductCategory from "./Components/ProductCategory/ProductCategory";
import ClassificationBox from "./Components/ClassificationBox/ClassificationBox";
import { PRODUCTLIST_API } from "../../config";
import { AiOutlineHome } from "react-icons/ai";

export default function ProductList() {
  const [categories, setCategories] = useState([]);
  const [newCategories, setNewCategories] = useState([]);
  const [state, setState] = useState({
    subcategoryCheckboxId1: "",
    subcategoryCheckboxId2: "",
    subcategoryCheckboxId3: "", // 실제 데이터 들어오면 추가
  });

  useEffect(() => {
    // fetch(PRODUCTLIST_API)
    fetch("/data/productList.json")
      .then((res) => res.json())
      .then((res) => setCategories(res.results));
  }, []);

  const isCheckedCategoryName = (e) => {
    const { name, value } = e.target;

    setState((prevState) => ({ ...prevState, [name]: value }));
    isAlreadyChecked(value);
    // alignCategories(value);
    // const isInclude = 카테고리.some(el=>el === value))
    if (isInclude) {
      const nextCategory = 카테고리.filter((el) => el !== value);
      this.seState();
    } else {
      this.setState({ category: [] });
    }
  };

  // 전체데이터
  // 지금 보여줄 데이터
  // 지금 체크 되어있는 카테고리(중복 가능) ["브루드 커피" ,"에스프레소","프라프치노"]
  // let newData= []

  // 카테고리.forEach(el=> {

  //const categoryData = 전체데이터.filter(el2=>el2.name === el))
  // newData.concat(categoryData)
  //   }
  // setState

  // // 내가 작성한 코드
  // const isAlreadyChecked = (updatedValue) => {
  //   newCategories.map((newcategory) => {
  //     if (newcategory.name === updatedValue) {
  //       // newCategories.splice(newcategory.name.includes(updatedValue));
  //       console.log("isAlreadyChecked 뉴카테고리 확인: ", newCategories);
  //     } else {
  //       alignCategories(updatedValue);
  //     }
  //   });
  // };

  // // newCategories = categories 재정렬(e.target.value로 들어온 값에 대한 객체만)
  // const alignCategories = (categoryName) => {
  //   {
  //     categories.map((category) => {
  //       if (category.name === categoryName) {
  //         console.log("alignCategories 진입");
  //         setNewCategories((prev) => [...prev, category]);
  //       }
  //     });
  //   }
  // };

  console.log(
    // "ProductList state 확인:",
    // state,
    // "categories 확인:",
    // categories,
    "newCategories 확인:",
    newCategories
  );
  return (
    <ProductListWrap>
      <Nav>네브바 자리</Nav>
      <Header>
        <MenuName>음료</MenuName>
        <CurrentLocation>
          <AiOutlineHome size={18} /> {">"} MENU {">"} 음료
        </CurrentLocation>
      </Header>
      <ClassificationBox
        categories={categories}
        state={state}
        isCheckedCategoryName={isCheckedCategoryName}
      />
      <ProductCategory
        categories={categories}
        state={state}
        newCategories={newCategories}
      />
    </ProductListWrap>
  );
}

const ProductListWrap = styled.div`
  padding: 0px 125px;
  font-family: $nanumGothic;
`;

const Nav = styled.nav`
  border: 1px solid black;
  height: 120px;
  width: 100%;
`;

const Header = styled.header`
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 98px;
`;

const MenuName = styled.p`
  font-size: 28px;
  font-weight: bold;
`;

const CurrentLocation = styled.div`
  font-size: 12px;
  color: #222222;
`;
