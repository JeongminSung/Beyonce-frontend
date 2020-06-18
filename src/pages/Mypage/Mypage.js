import React, { Component, useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Avatar } from "@material-ui/core";
//import Sidebar from "./Sidebar";

const Mypage =() => {

    const [token, setToken] =useState("")
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState(null);
    const [id, setId] = useState(null);
    const [img, setImg] =useState(null);
  
    
    const onChange = (e) => {
      const cha = e.target.files[0].name.indexOf(".")
      setFile(e.target.files[0])
      if( cha ){
      setTitle(e.target.files[0].name.slice(0, cha))
      } else {
        setTitle(e.target.files[0].name)
      }
    }

    useEffect(() => {
      setToken(localStorage.getItem("Login-token"))
      getData()
    }, [id])


    const onClick = () => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('title', title);
      fetch( `http://10.58.3.78:8000/feed?title=${title}`, {
        method: "POST",
        // headers: {
        //   // "Content-Type" : "multipart/form-data",
        //   "Authorization" : tokken
        // },
        headers: {
          // "content-type": "multipart/form-data",
          // "Content-Type":
          //   "multipart/form-data; boundary=----WebKitFormBoundaryIn312MOjBWdkffIM",
          Authorization:
            token,
        },
        body: formData,
      }).then((res) => res.json())
        .then((res) => {
        if (res.id) {
          alert("good");
          setId(res.id)
          console.log("id입니다 ", res.id);
        } else {
          alert("sorry");
          console.log(res);
        }
      })

    }

    const getData = () => {
      fetch(`http://10.58.3.78:8000/feed/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setImg(res.data.owners[0])
      })
    }

    console.log("token :", token)
    console.log("file :", file)
    console.log("title :", title)
    console.log("img :", img)

    return(
        <Wrap>
          <Header />
          <MainWrap>
            <ProfileBanner>
              <BannerCenter>
                <DropTarget>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.672 42.672" class="ProfileBanner-dropIcon-14n"><path d="M31.654,10.075C19.884,10.075,10,19.322,10,31.092A21.9,21.9,0,0,0,31.654,52.747c11.77,0,21.017-9.884,21.017-21.654A20.807,20.807,0,0,0,31.654,10.075Zm10.19,24.2L31.654,43.83c-.156.156.22.637,0,.637s-.481-.481-.637-.637l-10.19-9.553c-.24-.239-.132-.325,0-.637s.3-.643.637-.637h6.369V18.992c0-.458.816-.637,1.274-.637h4.458c.458,0,1.274.179,1.274.637V33h6.369c.333,0,.512.328.637.637S42.081,34.041,41.845,34.277Z" transform="translate(-10 -10.075)"></path></svg>
                </DropTarget>
                <BannerHeading>
                  Add a Banner Image
                </BannerHeading>
                <BannerAsset>
                  Optimal dimensions 3200 x 410px
                </BannerAsset>
              </BannerCenter>
            </ProfileBanner>
            <ProfileWrap>
              <SideWrap>
                <AvatarContainer>
                  <AvatarImg>
                      <img src="https://a5.behance.net/925d33829716d3653f7c237b4fe208b8dd40c734/img/profile/no-image-115.png?cb=264615658" srcset="https://a5.behance.net/925d33829716d3653f7c237b4fe208b8dd40c734/img/profile/no-image-50.png?cb=264615658 50w, https://a5.behance.net/925d33829716d3653f7c237b4fe208b8dd40c734/img/profile/no-image-115.png?cb=264615658 115w, https://a5.behance.net/925d33829716d3653f7c237b4fe208b8dd40c734/img/profile/no-image-138.png?cb=264615658 138w" sizes="115px" class="AvatarImage-avatarImage-3uu Avatar-root--Wh" />
                  </AvatarImg>
                  <PlusContainer>
                    <PlusIcon>
                      <PlusLink>
                        <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 533.333 533.333"><path d="M516.7,200H333.3V16.7c0-9.2-7.5-16.7-16.7-16.7h-100C207.5,0,200,7.5,200,16.7V200H16.7C7.5,200,0,207.5,0,216.7v100
	                      c0,9.2,7.5,16.7,16.7,16.7H200v183.3c0,9.2,7.5,16.7,16.7,16.7h100c9.2,0,16.7-7.5,16.7-16.7V333.3h183.3c9.2,0,16.7-7.5,16.7-16.7
	                      v-100C533.3,207.5,525.9,200,516.7,200z"></path></svg>
                      </PlusLink>
                    </PlusIcon>
                  </PlusContainer>
                </AvatarContainer>
                <UserName>Mokyoungg</UserName>
                <UserDetail>
                  <Location>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-4808 -20688 14.286 20" width="15" height="15"><g><path d="M-4800.857-20688a7.143 7.143 0 0 0-7.143 7.143c0 5.714 7.143 12.857 7.143 12.857s7.143-7.143 7.143-12.857a7.142 7.142 0 0 0-7.143-7.143zm0 10a2.857 2.857 0 1 1 2.857-2.859 2.858 2.858 0 0 1-2.857 2.859z"></path></g></svg>
                  우리집,Busan
                  </Location>
                </UserDetail>
                <EditBtnWrap>
                    <EditBtn>
                      <BtnLabel>
                        <Label>
                          Edit Your Profile
                        </Label>
                      </BtnLabel>
                    </EditBtn>
                  </EditBtnWrap>
                  <UserInfoWrap>
                    <UserInfo>
                      <Info>menber since: may 16, 2120</Info>
                    </UserInfo>
                  </UserInfoWrap>
              </SideWrap>
              <BoardWrap>
                <TabControl>
                  <TabList>Work</TabList>
                  <TabList>Moodboards</TabList>
                  <TabList>Appreciations</TabList>
                  <TabList>Insights</TabList>
                  <TabList>Drafts</TabList>
                </TabControl>
                <WorkWrap>
                { img !== null && 
                <UserWork>
                  <WorkWork src={img.work_imgs[0]} />
                </UserWork>}
                <AddWorkWrap onClick={onClick}>
                  <Portfolio>
                    <CreateHeading>
                      <CreateText>
                        Create a Project
                      </CreateText>
                    </CreateHeading>
                    <CreateFooter>
                      <FooterPara>
                        Get feedback, views, and appreciations. Public projects can be featured by our curators.
                      </FooterPara>
                    </CreateFooter>
                  </Portfolio>
                </AddWorkWrap>
                {/*
                <UserWorkWrap onClick={onClick} >
                  <WorkGrid>
                    <CoverCover>
                      <CoverWrap>
                        <CoverContent>
                          <Portfolio>
                            <CreateHeading>
                              <CreateText>
                              Create a Project
                              </CreateText>
                            </CreateHeading>
                            <CreateFooter>
                              <FooterPara>
                              Get feedback, views, and appreciations. Public projects can be featured by our curators.
                              </FooterPara>
                            </CreateFooter>
                          </Portfolio>
                        </CoverContent>
                      </CoverWrap>
                    </CoverCover>
                  </WorkGrid>
                </UserWorkWrap>
                */}
                </WorkWrap>
              </BoardWrap>
            </ProfileWrap>
          </MainWrap>
          <File type="file" accept="image/bmp,image/gif,image/jpeg,image/png,image/tiff,image/webp"onChange={onChange}></File>
          <Footer />
        </Wrap>
    )
}

export default Mypage;

//styled-components

const Wrap = styled.div `
    background: #f9f9f9;
    padding-top: 0 !important;
    color: #2b2b2b;
    font-size: 12px;
    line-height: 1.3;
`

const MainWrap = styled.div `
    position: relative;
    z-index: 1;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    border: 0;
    font-size: 100%;
    margin-top: 60px;
    outline: 0;
    background-color: #f9f9f9;
    color: #191919;
    min-height: 100vh;
`

const ProfileBanner = styled.div `
    -webkit-box-align: center;
    align-items: center;
    background-color: #4b4b4b;
    color: #ebebeb;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    transition: background-color 0.15s linear, height 0.65s cubic-bezier(0.19, 1, 0.22, 1);
    height: 210px;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
`

const BannerCenter = styled.div `
    position: relative;
    text-align: center;
    z-index: 2;
    border: 0;
    font-size: 100%;
    margin: 0;
    outline: 0;
    padding: 0;
    color: #ebebeb;
`

const DropTarget = styled.div `    
    height: 45px;
    width: 45px;
    margin: 0 auto 10px;
    fill: #ebebeb;
    margin-bottom: -20px;
`

const BannerHeading = styled.h4 `
    transition: color 0.15s linear;
    font-size: 20px;
    font-weight: normal;
    margin: 4px auto;
    line-height: 20px;
    font-style: normal;
    font-variant: normal;
    display: block;
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    text-align: center;
    color: #ebebeb;
    margin-bottom: -10px;
`

const BannerAsset=styled.p `
    transition: color 0.15s linear;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 10px;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    text-align: center;
    cursor: pointer;
`

const ProfileWrap = styled.div `
    max-width: 1338px;
    -webkit-box-align: start;
    align-items: flex-start;
    display: flex;
    padding: 60px 50px 50px;
    margin: 0 auto;
    min-height: 101vh;
    position: relative;
`

const SideWrap = styled.div `
    padding: 25px 30px 16px;
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    flex-shrink: 0;
    width: 360px;
    position: relative;
    z-index: 1;
    background-color: #fff;
    bottom: 0;
    content: '';
    opacity: 1;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    transition: opacity 0.25s linear;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 60px;
    left: 50px;
`

const ProfileHeader = styled.div `
    text-align: center;
    border: 0;
    font-size: 100%;
    margin: 0;
    outline: 0;
    padding: 0;
`

const AvatarContainer = styled.div `
    height: 118px;
    width: 118px;
    background-color: #fff;
    border-radius: 50%;
    display: inline-block;
    margin-bottom: 2px;
    position: relative;
    transition: margin-top 0.65s cubic-bezier(0.19, 1, 0.22, 1);
`

const AvatarImg = styled.div `
    height: 110px;
    width: 110px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    border-radius: 50%;
    overflow: hidden;
`

const PlusContainer = styled.div `
    bottom: 2px;
    cursor: pointer;
    position: absolute;
    right: 7px;
    text-align: center;
    z-index: 3;
    top: 85px;
    right: 10px;
`

const PlusIcon = styled.div `
    position: absolute;
    right: 0;
    display: block;
    padding-bottom: 2px;
`

const PlusLink = styled.a `
    -webkit-box-align: center;
    align-items: center;
    background: #0057ff;
    border-radius: 50%;
    display: flex;
    height: 25px;
    -webkit-box-pack: center;
    justify-content: center;
    width: 25px;
    color: #0057ff;
    cursor: pointer;
    text-decoration: none;
    fill: #fff;
    border: 2px solid #fff;
`

const UserName = styled.h1 `
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

const UserDetail = styled.div `
    color: #696969;
    margin: 0 auto;
    fill: #696969;
    display:flex;
    justify-content: flex-start;
`

const Location = styled.p `
    margin: 20px 0;
    font-size: 15px;
    line-height: 1.4;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    text-align: center;
`

const EditBtnWrap = styled.div `
    margin-bottom: 10px;
    margin-top: 10px;
    display: flex;
    margin: 25px -5px 20px;
`

const EditBtn = styled.a `
    background: #0057ff;
    border-color: transparent;
    color: #fff;
    border: 1px solid transparent;
    border-radius: 100px;
    cursor: pointer;
    display: inline-block;
    font-weight: 600;
    line-height: 1;
    transition-duration: 300ms;
    transition-property: color, background;
    user-select: none;
    margin: auto;
    max-width: 200px;
`

const BtnLabel = styled.div `
    padding: 8px 18px;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    font-weight: 600;
    line-height: 1;
    cursor: pointer;
`

const Label = styled.div `
    font-size: 14px;
    border: 1px solid transparent;
    display: inline-block;
    max-width: 100%;
`

const UserInfoWrap = styled.div `
    width: 100%;
    border: 0;
    font-size: 100%;
    margin: 0;
    outline: 0;
    padding: 0;
`

const UserInfo = styled.div `
    font-size: 13px;
    line-height: 1.4;
`

const Info = styled.p `
    font-size: 11px;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 10px;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`

const BoardWrap = styled.div `
    -webkit-box-flex: 1;
    flex: 1;
    margin: 170px 0 50px 390px;
    border: 0;
    font-size: 100%;
    outline: 0;
    padding: 0;
`

const TabControl = styled.ul `
    margin-top: 50px;
    margin-bottom: 25px;
    margin: 0;
    padding: 0;
    list-style: none;
    margin
    -block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
`

const TabList = styled.li `
    margin-left: 0;
    display: inline-block;
    font-size: 15px;
    font-weight: bold;
    margin: 0 8px;
    list-style: none;
`

const UserWorkWrap = styled.div `
    border: 0;
    font-size: 100%;
    margin: 0;
    outline: 0;
    padding: 0;
    position: relative;
`
/*
const WorkGrid = styled.div `
    width: 100%;
    border: 0;
    font-size: 100%;
    margin: 0;
    outline: 0;
    padding: 0;
`

const CoverCover = styled.div `
    position: relative;
    background-color: rgba(255, 255, 255, 0.5);
    border: 1px dashed #b7b7b7;
    text-align: center;
    transition: background-color 0.15s linear;
`

const CoverWrap = styled.div `
    border-radius: 4px;
    display: block;
    padding-top: 78.22%;
    position: relative;
    width: 100%;
`

const CoverContent = styled.div `
    border-radius: 4px;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
`

const Portfolio = styled.a `
    bottom: 0;
    color: #959595;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    left: 0;
    position: absolute;
    right: 0;
    text-decoration: none;
    top: 0;
    cursor: pointer;
`


*/


//grid-template-columns: repeat(2, 1fr);
//grid-column-gap: 20px;
//grid-row-gap: 20px;

const File = styled.input `
    background: red;
    width: 100px;
    height: 100px;  
`

const WorkWrap = styled.div `
    display: flex;
    justify-content: flex-start;
`

const UserWork = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border: 0;
    font-size: 100%;
    margin: 20px;
    outline: 0;
    padding: 0;
    position: relative;
    width: 49%;
    height: 350px;
    font-size: 100%;
    background: #fff;
`

const AddWorkWrap = styled.div `
    display: block;
    border: 0;
    font-size: 100%;
    margin: 20px;
    outline: 0;
    padding: 0;
    position: relative;
    width: 49%;
    height: 350px;
    font-size: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    border: 1px dashed #b7b7b7;
`

const Portfolio = styled.a `
    bottom: 0;
    color: #959595;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    left: 0;
    position: absolute;
    right: 0;
    text-decoration: none;
    top: 0;
    cursor: pointer;
`


const CreateHeading = styled.div `
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    height: 100%;
    -webkit-box-pack: center;
    justify-content: center;
    width: 100%;
`

const CreateText = styled.h3 `
    font-size: 22px;
    font-weight: normal;
    letter-spacing: -0.02rem;
    font-weight: 600;
`

const CreateFooter = styled.div `
    flex-shrink: 0;
    font-size: 14px;
    line-height: 1.25;
    top: auto;
    padding: 0 5% 15px;
    border: 0;
    outline: 0;
    padding: 0;
    color: #959595;
    width: 90%;
    text-align: center;
    margin: 0 auto;
`

const FooterPara = styled.p `
    line-height: inherit;
    margin: 3px auto;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    color: #959595;
`

const WorkWork = styled.img `
    width: 100%;
`

