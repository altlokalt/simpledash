import React from "react";

import { Line, Img, Text, List, Button, Input } from "components";

const DekstopPage = () => {
  return (
    <>
      <div className="bg-gray_902 font-quicksand h-[2546px] mx-[auto] pb-[35px] sm:pr-[20px] pr-[35px] relative w-[100%]">
        <div className="absolute h-[1024px] left-[0] md:px-[20px] top-[0] w-[8%]">
          <Line className="bg-gray_903 h-[5px] mt-[100px] mx-[auto] w-[100%]" />
          <Img
            src="images/img_sidebar.svg"
            className="absolute h-[1024px] sm:hidden inset-[0] justify-center m-[auto] w-[auto]"
            alt="Sidebar"
          />
        </div>
        <div className="absolute md:h-[1896px] h-[2363px] inset-y-[0] my-[auto] md:px-[20px] right-[1%] md:w-[100%] w-[89%]">
          <div className="flex flex-col gap-[23px] h-[100%] items-center justify-start ml-[20px] mt-[583px] w-[66%]">
            <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
              <Text
                className="font-medium text-left text-white_A700 w-[auto]"
                as="h6"
                variant="h6"
              >
                Hot Live Auction
              </Text>
              <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                <Text
                  className="font-medium text-left text-white_A700 w-[auto]"
                  variant="body6"
                >
                  Show More
                </Text>
                <Img
                  src="images/img_arrowright_gray_300.svg"
                  className="h-[18px] w-[18px]"
                  alt="arrowright"
                />
              </div>
            </div>
            <List
              className="sm:flex-col flex-row gap-[16px] grid md:grid-cols-1 grid-cols-2 justify-center w-[100%]"
              orientation="horizontal"
            >
              <div className="flex flex-1 items-center justify-start w-[100%]">
                <div
                  className="bg-cover bg-gray_301 bg-no-repeat h-[200px] md:h-[434px] relative w-[100%]"
                  style={{
                    backgroundImage: "url('images/img_maskgroup_200x433.png')",
                  }}
                >
                  <Img
                    src="images/img_rectangle21.png"
                    className="h-[200px] m-[auto] object-cover rounded-[12px] w-[100%]"
                    alt="RectangleTwentyOne"
                  />
                  <div className="absolute bg-bluegray_500 flex inset-x-[0] items-start justify-end mx-[auto] p-[19px] rounded-[12px] top-[0] w-[100%]">
                    <div className="bg-black_900_51 border-[1px] border-solid border-white_A700 flex items-center justify-end mb-[64px] mt-[243px] p-[20px] rounded-[8px] md:w-[100%] w-[76%]">
                      <div className="flex flex-col gap-[6px] items-start justify-start mt-[4px] md:w-[100%] w-[92%]">
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <Text
                            className="font-semibold text-left text-white_A700 w-[auto]"
                            variant="body3"
                          >
                            18h : 17m : 29s
                          </Text>
                          <Text
                            className="font-semibold text-left text-white_A700 w-[auto]"
                            variant="body3"
                          >
                            17.53 ETH
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[71px] items-center justify-start md:w-[100%] w-[95%]">
                          <Text
                            className="font-semibold text-left text-white_A700 w-[auto]"
                            variant="body6"
                          >
                            Time Reamining
                          </Text>
                          <Text
                            className="font-semibold text-left text-white_A700 w-[auto]"
                            variant="body6"
                          >
                            Highest Bid
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-start w-[100%]">
                <div
                  className="bg-cover bg-gray_301 bg-no-repeat h-[200px] md:h-[434px] relative w-[100%]"
                  style={{
                    backgroundImage: "url('images/img_maskgroup_200x433.png')",
                  }}
                >
                  <Img
                    src="images/img_rectangle21.png"
                    className="h-[200px] m-[auto] object-cover rounded-[12px] w-[100%]"
                    alt="RectangleTwentyOne One"
                  />
                  <div className="absolute bg-bluegray_500 flex inset-x-[0] items-start justify-end mx-[auto] p-[19px] rounded-[12px] top-[0] w-[100%]">
                    <div className="bg-black_900_51 border-[1px] border-solid border-white_A700 flex items-center justify-end mb-[76px] mt-[231px] p-[20px] rounded-[8px] md:w-[100%] w-[76%]">
                      <div className="flex flex-col gap-[6px] items-start justify-start mt-[4px] md:w-[100%] w-[92%]">
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <Text
                            className="font-semibold text-left text-white_A700 w-[auto]"
                            variant="body3"
                          >
                            18h : 17m : 29s
                          </Text>
                          <Text
                            className="font-semibold text-left text-white_A700 w-[auto]"
                            variant="body3"
                          >
                            17.53 ETH
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[71px] items-center justify-start md:w-[100%] w-[95%]">
                          <Text
                            className="font-semibold text-left text-white_A700 w-[auto]"
                            variant="body6"
                          >
                            Time Reamining
                          </Text>
                          <Text
                            className="font-semibold text-left text-white_A700 w-[auto]"
                            variant="body6"
                          >
                            Highest Bid
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </List>
          </div>
          <div className="absolute md:h-[1896px] h-[2363px] inset-[0] justify-center m-[auto] w-[100%]">
            <div className="absolute flex flex-col gap-[25px] inset-x-[0] justify-start mx-[auto] top-[0] w-[99%]">
              <div className="flex flex-row h-[1088px] md:h-[830px] mr-[60px] relative md:w-[100%] w-[96%]">
                <div className="absolute h-[371px] left-[0] top-[17%] md:w-[100%] w-[78%]">
                  <div className="absolute bg-gray_905 flex h-[100%] inset-y-[0] items-center justify-start left-[0] my-[auto] pb-[24px] rounded-[12px] w-[24%]">
                    <div className="flex flex-col gap-[12px] items-center justify-start w-[100%]">
                      <div className="md:h-[156px] h-[173px] relative w-[100%]">
                        <Img
                          src="images/img_maskgroup.svg"
                          className="absolute h-[156px] inset-x-[0] mx-[auto] top-[0] w-[auto]"
                          alt="Maskgroup"
                        />
                        <Img
                          src="images/img_search_bluegray_700.svg"
                          className="absolute bottom-[0] h-[42px] left-[5%] w-[auto]"
                          alt="search"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start md:w-[100%] w-[90%]">
                        <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                          <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                            <Img
                              src="images/img_send.svg"
                              className="h-[24px] w-[24px]"
                              alt="send"
                            />
                            <Text
                              className="font-semibold text-left text-white_A700 w-[auto]"
                              variant="body3"
                            >
                              1.40ETH
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[4px] items-center justify-center w-[auto]">
                            <Text
                              className="font-medium text-left text-white_A700 w-[auto]"
                              variant="body5"
                            >
                              320
                            </Text>
                            <Img
                              src="images/img_profile.svg"
                              className="h-[28px] w-[60px]"
                              alt="profile"
                            />
                          </div>
                        </div>
                        <Text
                          className="font-medium leading-[24.00px] mt-[14px] text-bluegray_100 text-left w-[100%]"
                          variant="body4"
                        >
                          Your Brain social media addiction
                        </Text>
                        <Button
                          className="border-[1px] border-blue_301 border-solid flex items-center justify-center mt-[20px] px-[32px] py-[16px] rounded-[8px] sm:px-[20px] text-center"
                          rightIcon={
                            <Img
                              src="images/img_upload.svg"
                              className="ml-[10px] text-center"
                              alt="upload"
                            />
                          }
                        >
                          <div className="bg-transparent cursor-pointer font-medium leading-[normal] text-[14px] text-blue_301 text-left">
                            Place Your Bid
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-gray_905 flex h-[100%] inset-y-[0] items-center justify-start left-[25%] my-[auto] pb-[24px] rounded-[12px] w-[24%]">
                    <div className="flex flex-col gap-[12px] items-center justify-start w-[100%]">
                      <div className="md:h-[156px] h-[173px] relative w-[100%]">
                        <Img
                          src="images/img_maskgroup.svg"
                          className="absolute h-[156px] inset-x-[0] mx-[auto] top-[0] w-[auto]"
                          alt="Maskgroup One"
                        />
                        <Img
                          src="images/img_search_bluegray_700.svg"
                          className="absolute bottom-[0] h-[42px] left-[5%] w-[auto]"
                          alt="search One"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start md:w-[100%] w-[90%]">
                        <div className="flex flex-row gap-[19px] items-center justify-between md:w-[100%] w-[98%]">
                          <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                            <Img
                              src="images/img_send.svg"
                              className="h-[24px] w-[24px]"
                              alt="send One"
                            />
                            <Text
                              className="font-semibold text-left text-white_A700 w-[auto]"
                              variant="body3"
                            >
                              1.50ETH
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[4px] items-center justify-center w-[auto]">
                            <Text
                              className="font-medium text-left text-white_A700 w-[auto]"
                              variant="body5"
                            >
                              175
                            </Text>
                            <Img
                              src="images/img_profile.svg"
                              className="h-[28px] w-[60px]"
                              alt="profile One"
                            />
                          </div>
                        </div>
                        <Text
                          className="font-medium leading-[24.00px] mt-[14px] text-bluegray_100 text-left w-[100%]"
                          variant="body4"
                        >
                          Land damaged by me and nature
                        </Text>
                        <Button
                          className="border-[1px] border-blue_301 border-solid flex items-center justify-center mt-[20px] px-[32px] py-[16px] rounded-[8px] sm:px-[20px] text-center"
                          rightIcon={
                            <Img
                              src="images/img_upload.svg"
                              className="ml-[10px] text-center"
                              alt="upload"
                            />
                          }
                        >
                          <div className="bg-transparent cursor-pointer font-medium leading-[normal] text-[14px] text-blue_301 text-left">
                            Place Your Bid
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-gray_905 flex h-[100%] inset-y-[0] items-center justify-start my-[auto] pb-[24px] right-[25%] rounded-[12px] w-[24%]">
                    <div className="flex flex-col gap-[12px] items-center justify-start w-[100%]">
                      <div className="md:h-[156px] h-[173px] relative w-[100%]">
                        <Img
                          src="images/img_maskgroup.svg"
                          className="absolute h-[156px] inset-x-[0] mx-[auto] top-[0] w-[auto]"
                          alt="Maskgroup Two"
                        />
                        <Img
                          src="images/img_search_bluegray_700.svg"
                          className="absolute bottom-[0] h-[42px] left-[5%] w-[auto]"
                          alt="search Two"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start md:w-[100%] w-[90%]">
                        <div className="flex flex-row gap-[20px] items-center justify-between md:w-[100%] w-[99%]">
                          <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                            <Img
                              src="images/img_send.svg"
                              className="h-[24px] w-[24px]"
                              alt="send Two"
                            />
                            <Text
                              className="font-semibold text-left text-white_A700 w-[auto]"
                              variant="body3"
                            >
                              1.32ETH
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[4px] items-center justify-center w-[auto]">
                            <Text
                              className="font-medium text-left text-white_A700 w-[auto]"
                              variant="body5"
                            >
                              105
                            </Text>
                            <Img
                              src="images/img_profile.svg"
                              className="h-[28px] w-[60px]"
                              alt="profile Two"
                            />
                          </div>
                        </div>
                        <Text
                          className="font-medium leading-[24.00px] mt-[14px] text-bluegray_100 text-left w-[100%]"
                          variant="body4"
                        >
                          Aurora Wave Dark Purple Magma Tone
                        </Text>
                        <Button
                          className="border-[1px] border-blue_301 border-solid flex items-center justify-center mt-[20px] px-[32px] py-[16px] rounded-[8px] sm:px-[20px] text-center"
                          rightIcon={
                            <Img
                              src="images/img_upload.svg"
                              className="ml-[10px] text-center"
                              alt="upload"
                            />
                          }
                        >
                          <div className="bg-transparent cursor-pointer font-medium leading-[normal] text-[14px] text-blue_301 text-left">
                            Place Your Bid
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray_905 flex h-[100%] items-center justify-start ml-[auto] my-[auto] pb-[24px] rounded-[12px] w-[24%]">
                    <div className="flex flex-col gap-[12px] items-center justify-start w-[100%]">
                      <div className="md:h-[156px] h-[173px] relative w-[100%]">
                        <Img
                          src="images/img_maskgroup.svg"
                          className="absolute h-[156px] inset-x-[0] mx-[auto] top-[0] w-[auto]"
                          alt="Maskgroup Three"
                        />
                        <Img
                          src="images/img_search_bluegray_700.svg"
                          className="absolute bottom-[0] h-[42px] left-[5%] w-[auto]"
                          alt="search Three"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start md:w-[100%] w-[90%]">
                        <div className="flex flex-row gap-[21px] items-center justify-between md:w-[100%] w-[98%]">
                          <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                            <Img
                              src="images/img_send.svg"
                              className="h-[24px] w-[24px]"
                              alt="send Three"
                            />
                            <Text
                              className="font-semibold text-left text-white_A700 w-[auto]"
                              variant="body3"
                            >
                              1.86ETH
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[4px] items-center justify-center w-[auto]">
                            <Text
                              className="font-medium text-left text-white_A700 w-[auto]"
                              variant="body5"
                            >
                              157
                            </Text>
                            <Img
                              src="images/img_profile.svg"
                              className="h-[28px] w-[60px]"
                              alt="profile Three"
                            />
                          </div>
                        </div>
                        <Text
                          className="font-medium leading-[24.00px] mt-[14px] text-bluegray_100 text-left w-[100%]"
                          variant="body4"
                        >
                          Ancient coins from china&#39;s past
                        </Text>
                        <div className="border-[1px] border-blue_301 border-solid flex flex-row gap-[10px] items-center justify-center mt-[20px] sm:px-[20px] px-[32px] py-[16px] rounded-[8px] w-[208px]">
                          <Text
                            className="font-medium text-blue_301 text-left w-[auto]"
                            variant="body5"
                          >
                            Place Your Bid
                          </Text>
                          <Img
                            src="images/img_upload.svg"
                            className="h-[20px] w-[20px]"
                            alt="upload"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-gradient1  flex flex-row h-[100%] inset-[0] items-end justify-center m-[auto] p-[94px] sm:px-[20px] md:px-[40px] w-[100%]">
                    <Button className="bg-white_A700_4c border-[1px] border-solid border-white_A700 flex h-[42px] items-center justify-center mb-[75px] mt-[66px] rounded-[50%] w-[42px]">
                      <Img
                        src="images/img_arrowright_white_a700.svg"
                        className=""
                        alt="arrowright One"
                      />
                    </Button>
                  </div>
                </div>
                <div className="absolute flex flex-col gap-[17px] h-[100%] md:hidden inset-y-[0] items-center justify-start my-[auto] right-[0] w-[auto]">
                  <div className="bg-gray_904 flex flex-col gap-[21px] h-[358px] md:hidden items-start justify-center p-[24px] sm:px-[20px] rounded-[8px] w-[358px]">
                    <Text
                      className="font-medium mt-[2px] text-left text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Popular Creators
                    </Text>
                    <List
                      className="flex-col gap-[16px] grid items-center mb-[8px] w-[100%]"
                      orientation="vertical"
                    >
                      <div className="flex flex-row items-center justify-between w-[310px]">
                        <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                          <div className="bg-bluegray_500 h-[50px] rounded-[50%] w-[50px]"></div>
                          <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                            <Text
                              className="font-medium text-gray_302 text-left w-[auto]"
                              variant="body5"
                            >
                              Sing Forever
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                              variant="body6"
                            >
                              650 assets
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_overflowmenu.svg"
                          className="h-[24px] w-[24px]"
                          alt="overflowmenu"
                        />
                      </div>
                      <div className="flex flex-row items-center justify-between w-[310px]">
                        <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                          <div className="bg-bluegray_500 h-[50px] rounded-[50%] w-[50px]"></div>
                          <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                            <Text
                              className="font-medium text-gray_302 text-left w-[auto]"
                              variant="body5"
                            >
                              Entertaiment Hyperio
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                              variant="body6"
                            >
                              513 assets
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_overflowmenu.svg"
                          className="h-[24px] w-[24px]"
                          alt="overflowmenu One"
                        />
                      </div>
                      <div className="flex flex-row items-center justify-between w-[310px]">
                        <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                          <div className="bg-bluegray_500 h-[50px] rounded-[50%] w-[50px]"></div>
                          <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                            <Text
                              className="font-medium text-gray_302 text-left w-[auto]"
                              variant="body5"
                            >
                              Extender The Best Choice
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                              variant="body6"
                            >
                              427 assets
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_overflowmenu.svg"
                          className="h-[24px] w-[24px]"
                          alt="overflowmenu Two"
                        />
                      </div>
                      <div className="flex flex-row items-center justify-between w-[310px]">
                        <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                          <div className="bg-bluegray_500 h-[50px] rounded-[50%] w-[50px]"></div>
                          <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                            <Text
                              className="font-medium text-gray_302 text-left w-[auto]"
                              variant="body5"
                            >
                              Forever In Midnight{" "}
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                              variant="body6"
                            >
                              391 assets
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_overflowmenu.svg"
                          className="h-[24px] w-[24px]"
                          alt="overflowmenu Three"
                        />
                      </div>
                    </List>
                  </div>
                  <div className="bg-gray_904 flex flex-col gap-[23px] items-start justify-end p-[24px] sm:px-[20px] rounded-[8px] w-[100%]">
                    <Text
                      className="font-medium text-left text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Our Videos
                    </Text>
                    <div className="h-[160px] relative w-[98%]">
                      <Img
                        src="images/img_image.png"
                        className="h-[160px] m-[auto] object-cover rounded-[8px] w-[100%]"
                        alt="image Six"
                      />
                      <div className="absolute bg-bluegray_500 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[64px] sm:px-[20px] md:px-[40px] rounded-[8px] w-[100%]">
                        <Button className="bg-white_A700_33 flex items-center justify-center outline outline-[1px] outline-white_A700 p-[10px] rounded-[15px] w-[31px]">
                          <Img src="images/img_ic.svg" className="" alt="ic" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray_904 flex md:hidden items-center justify-end p-[24px] sm:px-[20px] rounded-[8px] w-[100%]">
                    <div className="flex flex-col gap-[23px] items-start justify-start w-[100%]">
                      <Text
                        className="font-medium text-left text-white_A700 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Recent Viewed
                      </Text>
                      <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                        <div className="flex flex-col gap-[16px] items-center justify-start w-[48%]">
                          <div className="bg-bluegray_500 h-[186px] rounded-[8px] w-[100%]"></div>
                          <div className="bg-bluegray_500 h-[130px] rounded-[8px] w-[100%]"></div>
                        </div>
                        <div className="flex flex-col gap-[16px] items-center justify-start w-[48%]">
                          <div className="bg-bluegray_500 h-[100px] rounded-[8px] w-[100%]"></div>
                          <div className="bg-bluegray_500 h-[100px] rounded-[8px] w-[100%]"></div>
                          <div className="bg-bluegray_500 h-[100px] rounded-[8px] w-[100%]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute flex items-center justify-start left-[0] top-[0] w-[71%]">
                  <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                    <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
                      <Text
                        className="text-left text-white_A700 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Welcome Back, Albert
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_200 text-left w-[auto]"
                        variant="body4"
                      >
                        A happy day with your favorite event
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
                      <div className="flex md:flex-1 flex-row gap-[4px] items-center justify-center md:w-[100%] w-[auto]">
                        <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                          <Button className="bg-cyan_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                            <Img
                              src="images/img_music_white_a700.svg"
                              className=""
                              alt="music"
                            />
                          </Button>
                          <Text
                            className="font-semibold text-cyan_A700 text-left w-[auto]"
                            variant="body4"
                          >
                            Music Concert
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                          <Button className="bg-white_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                            <Img
                              src="images/img_link.svg"
                              className="h-[21px]"
                              alt="link"
                            />
                          </Button>
                          <Text
                            className="font-medium text-gray_300 text-left w-[auto]"
                            variant="body4"
                          >
                            Clubbing Party
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                          <Button className="bg-white_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                            <Img
                              src="images/img_location.svg"
                              className=""
                              alt="location"
                            />
                          </Button>
                          <Text
                            className="font-medium text-gray_300 text-left w-[auto]"
                            variant="body4"
                          >
                            Games Live
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                          <Button className="bg-white_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                            <Img
                              src="images/img_volume_bluegray_703.svg"
                              className="h-[20px]"
                              alt="volume"
                            />
                          </Button>
                          <Text
                            className="font-medium text-gray_300 text-left w-[auto]"
                            variant="body4"
                          >
                            Festival
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                        <Text
                          className="font-medium text-left text-white_A700 w-[auto]"
                          variant="body6"
                        >
                          Show More
                        </Text>
                        <Img
                          src="images/img_arrowright_gray_300.svg"
                          className="h-[18px] w-[18px]"
                          alt="arrowright Two"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex font-rubik items-center justify-start md:ml-[0] ml-[906px] md:w-[100%] w-[32%]">
                <div className="flex flex-col md:hidden items-start justify-start w-[100%]">
                  <div className="flex flex-row items-end justify-between w-[100%]">
                    <Text
                      className="font-semibold text-left text-white_A700 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Featured Creators
                    </Text>
                    <Text
                      className="font-normal mb-[3px] mt-[9px] not-italic text-deep_purple_A200 text-left w-[auto]"
                      variant="body3"
                    >
                      All creator
                    </Text>
                  </div>
                  <div className="bg-gray_100 flex items-start justify-end mt-[37px] p-[5px] rounded-[40px] md:w-[100%] w-[99%]">
                    <div className="flex flex-row gap-[29px] items-start justify-start md:ml-[0] ml-[25px] mr-[auto] mt-[15px] md:w-[100%] w-[75%]">
                      <Img
                        src="images/img_image1.png"
                        className="h-[85px] md:h-[auto] object-cover rounded-[42px] w-[26%]"
                        alt="ImageOne"
                      />
                      <div className="flex flex-col gap-[6px] items-start justify-start mt-[9px] w-[64%]">
                        <Text
                          className="text-bluegray_901 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Gold B Rager
                        </Text>
                        <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_501 text-left w-[auto]"
                            variant="body3"
                          >
                            @GoldBRa
                          </Text>
                          <div className="flex flex-col relative w-[45%]">
                            <div className="bg-deep_purple_A200 h-[36px] mx-[auto] rounded-[18px] w-[100%]"></div>
                            <Text
                              className="font-bold mt-[-7px] mx-[auto] text-left text-white_A700 w-[auto] z-[1]"
                              variant="body2"
                            >
                              {" "}
                              Follow
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray_100 flex flex-col sm:hidden items-center justify-end md:ml-[0] ml-[61px] mt-[66px] p-[23px] sm:px-[20px] rounded-[40px] md:w-[100%] w-[86%]">
                    <Img
                      src="images/img_image_130x120.png"
                      className="h-[130px] md:h-[auto] mt-[23px] object-cover rounded-[65px] sm:w-[100%] w-[39%]"
                      alt="Image Seven"
                    />
                    <div className="flex flex-col font-roboto gap-[10px] items-center justify-start mt-[27px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-bold text-black_900 text-center w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Join Our Community
                      </Text>
                      <Text
                        className="font-bold text-black_900 text-center"
                        variant="body5"
                      >
                        Lorem ipsum dolor sit amet, consectetur
                        <br />
                        adipiscingelit. Sed eget nulla urna
                        <br />
                        lobortis metus.
                      </Text>
                    </div>
                    <Text
                      className="bg-deep_purple_A201 font-normal h-[63px] mt-[19px] not-italic pb-[21px] pt-[15px] sm:px-[20px] px-[35px] rounded-[30px] text-left text-white_A700 w-[261px]"
                      variant="body1"
                    >
                      Join Now
                    </Text>
                  </div>
                  <div className="bg-gray_100 flex sm:hidden items-center justify-start md:ml-[0] ml-[61px] mt-[24px] p-[19px] rounded-[40px] md:w-[100%] w-[86%]">
                    <div className="flex flex-col items-start justify-start mb-[13px] md:w-[100%] w-[98%]">
                      <div className="md:h-[104px] h-[146px] relative w-[100%]">
                        <Img
                          src="images/img_sharp1.png"
                          className="absolute h-[94px] inset-x-[0] mx-[auto] object-cover rounded-[10px] top-[0] w-[100%]"
                          alt="SharpOne"
                        />
                        <Img
                          src="images/img_image_104x83.png"
                          className="absolute bottom-[0] h-[104px] inset-x-[0] mx-[auto] object-cover rounded-[52px] w-[27%]"
                          alt="Image Eight"
                        />
                      </div>
                      <div className="flex flex-row font-rubik items-start justify-start mt-[13px] w-[100%]">
                        <Text
                          className="text-left text-white_A700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Melody Layla
                        </Text>
                        <Img
                          src="images/img_tick.png"
                          className="h-[21px] md:h-[auto] mt-[7px] object-cover w-[6%]"
                          alt="Tick"
                        />
                        <Button className="bg-deep_purple_A200 cursor-pointer font-bold leading-[normal] min-w-[74px] ml-[77px] py-[5px] rounded-[18px] text-[20px] text-center text-white_A700 w-[auto]">
                          {" "}
                          Follow
                        </Button>
                      </div>
                      <Text
                        className="font-normal font-rubik mt-[6px] not-italic text-gray_501 text-left w-[auto]"
                        variant="body3"
                      >
                        @Melodylay
                      </Text>
                      <Text
                        className="font-normal font-roboto md:ml-[0] ml-[2px] mt-[21px] not-italic text-gray_501 text-left"
                        variant="body5"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        <br />
                        elit. Sed eget nulla urna lobortis metus.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex font-plusjakartasans items-center justify-start left-[0] top-[38%] w-[67%]">
              <div className="flex flex-col gap-[30px] sm:hidden items-center justify-start w-[100%]">
                <div className="flex flex-row gap-[15px] items-center justify-start max-w-[900px] w-[100%]">
                  <Text
                    className="flex-1 font-bold text-left text-white_A700 tracking-[-0.66px] w-[auto]"
                    variant="body1"
                  >
                    Top Collection
                  </Text>
                  <Text
                    className="font-normal not-italic text-blue_A400 text-left tracking-[-0.48px] w-[auto]"
                    variant="body4"
                  >
                    View All
                  </Text>
                </div>
                <div className="flex flex-row md:gap-[40px] items-center justify-between w-[100%]">
                  <div className="bg-white_A700 flex flex-col items-center justify-start p-[15px] rounded-[8px] shadow-bs w-[32%]">
                    <div className="flex flex-row items-center justify-between md:w-[100%] w-[97%]">
                      <div className="flex flex-row gap-[15px] items-center justify-center w-[auto]">
                        <div className="bg-blue_A400 h-[32px] rounded-[50%] w-[32px]"></div>
                        <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-left text-white_A700 tracking-[-0.42px] w-[auto]"
                            variant="body5"
                          >
                            Wi Seung Hyun
                          </Text>
                          <Text
                            className="font-light text-blue_A400 text-left tracking-[-0.36px] w-[auto]"
                            variant="body6"
                          >
                            Owner
                          </Text>
                        </div>
                      </div>
                      <Button className="bg-gray_101 flex h-[33px] items-center justify-center my-[2px] p-[6px] rounded-[2px] w-[33px]">
                        <Img
                          src="images/img_favorite.svg"
                          className="h-[19px]"
                          alt="favorite"
                        />
                      </Button>
                    </div>
                    <div className="bg-black_900_26 flex items-center justify-start mt-[15px] p-[57px] sm:px-[20px] md:px-[40px] rounded-[4px] w-[100%]">
                      <Button className="bg-white_A700_7f border-[1px] border-solid border-white_A700_66 cursor-pointer font-medium leading-[normal] min-w-[142px] my-[23px] py-[9px] rounded-[4px] text-[16px] text-center text-white_A700 tracking-[-0.16px] w-[auto]">
                        Place a Bid
                      </Button>
                    </div>
                    <div className="flex items-center justify-start mb-[4px] mt-[15px] md:w-[100%] w-[97%]">
                      <div className="flex flex-col gap-[14px] items-center justify-start w-[100%]">
                        <Input
                          className="border-b-[1px] border-blue_A400 font-medium leading-[normal] pb-[15px] sm:pr-[20px] pr-[35px] text-[18px] text-left placeholder:text-white_A700 text-white_A700 tracking-[-0.54px] w-[100%]"
                          wrapClassName="w-[100%]"
                          name="Group104"
                          placeholder="Yellow Tree Human Art"
                        ></Input>
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                            <Text
                              className="font-normal text-blue_A400 text-left tracking-[-0.36px] w-[auto]"
                              variant="body6"
                            >
                              Ending in
                            </Text>
                            <Text
                              className="font-medium text-left text-white_A700 tracking-[-0.48px] w-[auto]"
                              variant="body4"
                            >
                              5h 12m 6s
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                            <Text
                              className="font-normal text-blue_A400 text-left tracking-[-0.36px] w-[auto]"
                              variant="body6"
                            >
                              Highest bid
                            </Text>
                            <Text
                              className="font-medium text-left text-white_A700 tracking-[-0.48px] w-[auto]"
                              variant="body4"
                            >
                              5.54 ETH
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex items-center justify-start p-[15px] rounded-[8px] shadow-bs1 w-[32%]">
                    <div className="flex flex-col items-center justify-start mb-[4px] w-[100%]">
                      <div className="flex flex-row gap-[119px] items-center justify-between w-[auto]">
                        <div className="flex flex-row gap-[15px] items-center justify-center w-[auto]">
                          <div className="bg-blue_A400 h-[32px] rounded-[50%] w-[32px]"></div>
                          <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                            <Text
                              className="font-medium text-left text-white_A700 tracking-[-0.42px] w-[auto]"
                              variant="body5"
                            >
                              Kim Tak
                            </Text>
                            <Text
                              className="font-light text-blue_A400 text-left tracking-[-0.36px] w-[auto]"
                              variant="body6"
                            >
                              Owner
                            </Text>
                          </div>
                        </div>
                        <Button className="bg-gray_101 flex h-[33px] items-center justify-center p-[6px] rounded-[2px] w-[33px]">
                          <Img
                            src="images/img_location_white_a700.svg"
                            className="h-[19px]"
                            alt="location One"
                          />
                        </Button>
                      </div>
                      <div className="bg-bluegray_50 h-[200px] mt-[15px] rounded-[4px] w-[100%]"></div>
                      <Input
                        className="border-b-[1px] border-blue_A400 font-medium leading-[normal] pb-[15px] sm:pr-[20px] pr-[35px] text-[18px] text-left placeholder:text-white_A700 text-white_A700 tracking-[-0.54px] w-[100%]"
                        wrapClassName="mt-[15px] sm:w-[100%] w-[97%]"
                        name="Group106"
                        placeholder="Green Tree Human Art"
                      ></Input>
                      <div className="flex flex-row items-center justify-between mt-[14px] md:w-[100%] w-[97%]">
                        <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                          <Text
                            className="font-normal text-blue_A400 text-left tracking-[-0.36px] w-[auto]"
                            variant="body6"
                          >
                            Ending in
                          </Text>
                          <Text
                            className="font-medium text-left text-white_A700 tracking-[-0.48px] w-[auto]"
                            variant="body4"
                          >
                            6h 12m 6s
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                          <Text
                            className="font-normal text-blue_A400 text-left tracking-[-0.36px] w-[auto]"
                            variant="body6"
                          >
                            Highest bid
                          </Text>
                          <Text
                            className="font-medium text-left text-white_A700 tracking-[-0.48px] w-[auto]"
                            variant="body4"
                          >
                            3.54 ETH
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex items-center justify-start p-[15px] rounded-[8px] shadow-bs1 w-[32%]">
                    <div className="flex flex-col items-center justify-start mb-[4px] w-[100%]">
                      <div className="flex flex-row gap-[92px] items-center justify-center w-[auto]">
                        <div className="flex flex-row gap-[15px] items-center justify-center w-[auto]">
                          <div className="bg-blue_A400 h-[32px] rounded-[50%] w-[32px]"></div>
                          <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                            <Text
                              className="font-medium text-left text-white_A700 tracking-[-0.42px] w-[auto]"
                              variant="body5"
                            >
                              Kim Tae-Mu
                            </Text>
                            <Text
                              className="font-light text-blue_A400 text-left tracking-[-0.36px] w-[auto]"
                              variant="body6"
                            >
                              Owner
                            </Text>
                          </div>
                        </div>
                        <Button className="bg-gray_101 flex h-[33px] items-center justify-center p-[6px] rounded-[2px] w-[33px]">
                          <Img
                            src="images/img_location_white_a700.svg"
                            className="h-[19px]"
                            alt="location Two"
                          />
                        </Button>
                      </div>
                      <div className="bg-bluegray_50 h-[200px] mt-[15px] rounded-[4px] w-[100%]"></div>
                      <Input
                        className="border-b-[1px] border-blue_A400 font-medium leading-[normal] pb-[15px] sm:pr-[20px] pr-[35px] text-[18px] text-left placeholder:text-white_A700 text-white_A700 tracking-[-0.54px] w-[100%]"
                        wrapClassName="mt-[15px] sm:w-[100%] w-[97%]"
                        name="Group108"
                        placeholder="White Tree Human Art"
                      ></Input>
                      <div className="flex flex-row items-center justify-between mt-[14px] md:w-[100%] w-[97%]">
                        <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                          <Text
                            className="font-normal text-blue_A400 text-left tracking-[-0.36px] w-[auto]"
                            variant="body6"
                          >
                            Ending in
                          </Text>
                          <Text
                            className="font-medium text-left text-white_A700 tracking-[-0.48px] w-[auto]"
                            variant="body4"
                          >
                            7h 12m 6s
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                          <Text
                            className="font-normal text-blue_A400 text-left tracking-[-0.36px] w-[auto]"
                            variant="body6"
                          >
                            Highest bid
                          </Text>
                          <Text
                            className="font-medium text-left text-white_A700 tracking-[-0.48px] w-[auto]"
                            variant="body4"
                          >
                            4.54 ETH
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[18%] flex font-rubik items-center justify-start left-[0] w-[68%]">
              <div className="flex flex-col gap-[28px] items-start justify-start w-[100%]">
                <Text
                  className="font-semibold text-left text-white_A700 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Top Collectibles
                </Text>
                <List
                  className="flex sm:flex-col flex-row font-roboto gap-[24px] grid-cols-3 justify-center w-[100%]"
                  orientation="horizontal"
                >
                  <div className="bg-white_A700 flex flex-1 flex-col gap-[22px] items-center justify-start p-[19px] rounded-[40px] w-[100%]">
                    <div className="h-[283px] md:h-[285px] mt-[2px] relative w-[100%]">
                      <Img
                        src="images/img_imagedirty.png"
                        className="h-[283px] m-[auto] object-cover rounded-[40px] w-[100%]"
                        alt="ImageDirty"
                      />
                      <Button className="absolute bg-gray_700 cursor-pointer font-normal leading-[normal] min-w-[108px] not-italic py-[8px] right-[8%] rounded-[17px] text-[14px] text-center text-white_A700 top-[7%] w-[auto]">
                        03h 06m 34s{" "}
                      </Button>
                      <div className="absolute bottom-[8%] h-[42px] left-[8%] w-[15%]">
                        <div className="bg-white_A700 h-[42px] m-[auto] rounded-[21px] w-[100%]"></div>
                        <Img
                          src="images/img_polygon1.svg"
                          className="absolute h-[21px] inset-y-[0] my-[auto] right-[19%] w-[auto]"
                          alt="PolygonOne"
                        />
                      </div>
                    </div>
                    <div className="font-rubik h-[106px] md:h-[116px] mb-[12px] relative w-[95%]">
                      <div className="absolute flex h-[max-content] inset-[0] items-center justify-center m-[auto] w-[100%]">
                        <div className="flex flex-col items-start justify-start w-[100%]">
                          <div className="flex flex-row gap-[128px] items-center justify-start md:w-[100%] w-[92%]">
                            <Text
                              className="font-medium text-gray_501 text-left w-[auto]"
                              variant="body5"
                            >
                              Dirty Coin
                            </Text>
                            <Text
                              className="font-medium text-gray_501 text-left w-[auto]"
                              variant="body5"
                            >
                              125{" "}
                            </Text>
                          </div>
                          <Text
                            className="font-medium mt-[9px] text-left text-white_A700 w-[auto]"
                            variant="body2"
                          >
                            Dirty Coin #50
                          </Text>
                          <div className="flex flex-row items-center justify-between mt-[28px] w-[100%]">
                            <Text
                              className="font-medium text-gray_501 text-left w-[auto]"
                              variant="body3"
                            >
                              Current bid
                            </Text>
                            <Text
                              className="font-medium text-gray_501 text-left w-[auto]"
                              variant="body3"
                            >
                              <span className="text-white_A700 text-[18px] font-rubik">
                                15.20
                              </span>
                              <span className="text-gray_501 text-[18px] font-rubik">
                                {" "}
                                ETH
                              </span>
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Img
                        src="images/img_heart.png"
                        className="absolute h-[21px] object-cover right-[0] top-[0] w-[8%]"
                        alt="Heart"
                      />
                      <Img
                        src="images/img_tick.png"
                        className="absolute h-[21px] left-[27%] object-cover top-[0] w-[8%]"
                        alt="TickOne"
                      />
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 flex-col gap-[22px] items-center justify-start p-[19px] rounded-[40px] w-[100%]">
                    <div className="h-[283px] md:h-[285px] mt-[2px] relative w-[100%]">
                      <Img
                        src="images/img_imagedzcutie.png"
                        className="h-[283px] m-[auto] object-cover rounded-[40px] w-[100%]"
                        alt="ImageDzCutie"
                      />
                      <Button className="absolute bg-gray_700 cursor-pointer font-normal leading-[normal] min-w-[108px] not-italic py-[8px] right-[8%] rounded-[17px] text-[14px] text-center text-white_A700 top-[7%] w-[auto]">
                        03h 06m 34s{" "}
                      </Button>
                      <div className="absolute bottom-[8%] h-[42px] left-[8%] w-[15%]">
                        <div className="bg-white_A700 h-[42px] m-[auto] rounded-[21px] w-[100%]"></div>
                        <Img
                          src="images/img_polygon1.svg"
                          className="absolute h-[21px] inset-[0] justify-center m-[auto] w-[auto]"
                          alt="PolygonTwo"
                        />
                      </div>
                    </div>
                    <div className="font-rubik h-[106px] md:h-[116px] mb-[12px] relative w-[95%]">
                      <div className="absolute flex h-[max-content] inset-[0] items-center justify-center m-[auto] w-[99%]">
                        <div className="flex flex-col items-start justify-start w-[100%]">
                          <div className="flex flex-row gap-[109px] items-center justify-start md:w-[100%] w-[94%]">
                            <Text
                              className="font-medium text-gray_501 text-left w-[auto]"
                              variant="body5"
                            >
                              DzCutie Coin
                            </Text>
                            <Text
                              className="font-medium text-gray_501 text-left w-[auto]"
                              variant="body5"
                            >
                              108{" "}
                            </Text>
                          </div>
                          <Text
                            className="font-medium mt-[9px] text-left text-white_A700 w-[auto]"
                            variant="body2"
                          >
                            DzCutie Coin #100
                          </Text>
                          <div className="flex flex-row items-center justify-between mt-[28px] w-[100%]">
                            <Text
                              className="font-medium text-gray_501 text-left w-[auto]"
                              variant="body3"
                            >
                              Current bid
                            </Text>
                            <Text
                              className="font-medium text-gray_501 text-left w-[auto]"
                              variant="body3"
                            >
                              <span className="text-white_A700 text-[18px] font-rubik">
                                11.05
                              </span>
                              <span className="text-gray_501 text-[18px] font-rubik">
                                {" "}
                                ETH
                              </span>
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Img
                        src="images/img_heart.png"
                        className="absolute h-[21px] object-cover right-[0] top-[0] w-[8%]"
                        alt="Heart One"
                      />
                      <Img
                        src="images/img_tick.png"
                        className="absolute h-[21px] left-[35%] object-cover top-[0] w-[8%]"
                        alt="TickTwo"
                      />
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 flex-col gap-[22px] items-center justify-start p-[19px] rounded-[40px] w-[100%]">
                    <div className="h-[283px] md:h-[285px] mt-[2px] relative w-[100%]">
                      <Img
                        src="images/img_imagekolo.png"
                        className="h-[283px] m-[auto] object-cover rounded-[40px] w-[100%]"
                        alt="ImageKolo"
                      />
                      <Button className="absolute bg-gray_700 cursor-pointer font-normal leading-[normal] min-w-[108px] not-italic py-[8px] right-[8%] rounded-[17px] text-[14px] text-center text-white_A700 top-[7%] w-[auto]">
                        03h 06m 34s{" "}
                      </Button>
                      <div className="absolute bottom-[8%] h-[42px] left-[8%] w-[15%]">
                        <div className="bg-white_A700 h-[42px] m-[auto] rounded-[21px] w-[100%]"></div>
                        <Img
                          src="images/img_polygon1.svg"
                          className="absolute h-[21px] inset-[0] justify-center m-[auto] w-[auto]"
                          alt="PolygonThree"
                        />
                      </div>
                    </div>
                    <div className="font-rubik h-[106px] md:h-[116px] mb-[12px] relative w-[95%]">
                      <div className="absolute flex h-[max-content] inset-y-[0] items-center justify-start left-[0] my-[auto] w-[96%]">
                        <div className="flex flex-col items-start justify-start w-[100%]">
                          <div className="flex flex-row gap-[132px] items-center justify-start md:w-[100%] w-[93%]">
                            <Text
                              className="font-medium text-gray_501 text-left w-[auto]"
                              variant="body5"
                            >
                              Kolo Coin
                            </Text>
                            <Text
                              className="font-medium text-gray_501 text-left w-[auto]"
                              variant="body5"
                            >
                              99
                            </Text>
                          </div>
                          <Text
                            className="font-medium mt-[9px] text-left text-white_A700 w-[auto]"
                            variant="body2"
                          >
                            Kolo Coin #150
                          </Text>
                          <div className="flex flex-row items-center justify-between mt-[28px] w-[100%]">
                            <Text
                              className="font-medium text-gray_501 text-left w-[auto]"
                              variant="body3"
                            >
                              Current bid
                            </Text>
                            <Text
                              className="font-medium text-gray_501 text-left w-[auto]"
                              variant="body3"
                            >
                              <span className="text-white_A700 text-[18px] font-rubik">
                                9.99
                              </span>
                              <span className="text-gray_501 text-[18px] font-rubik">
                                {" "}
                                ETH
                              </span>
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Img
                        src="images/img_heart.png"
                        className="absolute h-[21px] object-cover right-[0] top-[0] w-[8%]"
                        alt="Heart Two"
                      />
                      <Img
                        src="images/img_tick.png"
                        className="absolute h-[21px] left-[25%] object-cover top-[0] w-[8%]"
                        alt="TickThree"
                      />
                    </div>
                  </div>
                </List>
              </div>
            </div>
            <div className="absolute bottom-[0] flex font-rubik items-center justify-start left-[0] w-[73%]">
              <div className="flex flex-col gap-[24px] md:hidden items-start justify-start w-[100%]">
                <Text
                  className="font-semibold text-left text-white_A700 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Analysis
                </Text>
                <div className="flex flex-row gap-[27px] sm:hidden items-center justify-between w-[100%]">
                  <div className="bg-deep_purple_A200 flex md:hidden items-center justify-start p-[29px] sm:px-[20px] rounded-[40px] w-[59%]">
                    <div className="flex sm:flex-col flex-row gap-[33px] items-start justify-between my-[3px] md:w-[100%] w-[99%]">
                      <div className="flex flex-col gap-[35px] items-start justify-start sm:mt-[0] mt-[27px] sm:w-[100%] w-[auto]">
                        <Text
                          className="font-semibold text-left text-white_A700"
                          as="h4"
                          variant="h4"
                        >
                          Sell And Get
                          <br />
                          Your Rate NFT <br />
                          Here
                        </Text>
                        <Button className="bg-white_A700 cursor-pointer font-normal leading-[normal] min-w-[99px] not-italic py-[7px] rounded-[15px] text-[14px] text-center text-deep_purple_A200 w-[auto]">
                          Access now
                        </Button>
                      </div>
                      <Img
                        src="images/img_image3d.png"
                        className="h-[251px] md:h-[auto] object-cover sm:w-[100%] w-[auto]"
                        alt="Image3d"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-start w-[40%]">
                    <div className="bg-white_A700 flex flex-col justify-start p-[21px] sm:px-[20px] rounded-[40px] w-[100%]">
                      <Text
                        className="font-semibold md:ml-[0] ml-[171px] text-left text-white_A700 w-[auto]"
                        variant="body1"
                      >
                        Earning/month
                      </Text>
                      <div className="flex font-roboto items-center justify-start mt-[4px] mx-[auto] md:w-[100%] w-[77%]">
                        <div className="flex flex-col items-end justify-start w-[100%]">
                          <div className="flex flex-row gap-[22px] items-end justify-between w-[100%]">
                            <div className="flex flex-col gap-[43px] items-end justify-start w-[6%]">
                              <Text
                                className="not-italic text-deep_purple_800 text-right w-[auto]"
                                as="h1"
                                variant="h1"
                              >
                                100
                              </Text>
                              <div className="flex flex-col items-start justify-start md:w-[100%] w-[auto]">
                                <Text
                                  className="not-italic text-deep_purple_800 text-right w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  75
                                </Text>
                                <Text
                                  className="mt-[43px] not-italic text-deep_purple_800 text-right w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  50
                                </Text>
                                <Text
                                  className="mt-[43px] not-italic text-deep_purple_800 text-right w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  25
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[5px] mt-[43px] not-italic text-deep_purple_800 text-right w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  0
                                </Text>
                              </div>
                            </div>
                            <div className="h-[206px] md:h-[212px] mb-[4px] mt-[17px] relative w-[86%]">
                              <div className="md:h-[191px] h-[206px] m-[auto] w-[100%]">
                                <div className="absolute bottom-[0] h-[191px] inset-x-[0] mx-[auto] w-[100%]">
                                  <Img
                                    src="images/img_columns1.svg"
                                    className="absolute h-[191px] inset-y-[0] left-[0] my-[auto] w-[auto]"
                                    alt="ColumnsOne"
                                  />
                                  <Img
                                    src="images/img_columns2.svg"
                                    className="absolute bottom-[0] h-[178px] right-[0] w-[auto]"
                                    alt="ColumnsTwo"
                                  />
                                </div>
                                <div className="absolute flex flex-row items-start justify-between left-[1%] top-[0] w-[90%]">
                                  <Text
                                    className="mb-[6px] mt-[104px] not-italic text-center text-deep_purple_800 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    40
                                  </Text>
                                  <Text
                                    className="mb-[111px] not-italic text-center text-deep_purple_800 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    88
                                  </Text>
                                  <Text
                                    className="mb-[50px] mt-[61px] not-italic text-center text-deep_purple_800 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    60
                                  </Text>
                                  <Text
                                    className="mt-[111px] not-italic text-center text-deep_purple_800 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    37
                                  </Text>
                                </div>
                              </div>
                              <div className="absolute flex flex-row items-start justify-between right-[1%] top-[6%] w-[90%]">
                                <Text
                                  className="mb-[17px] mt-[28px] not-italic text-center text-deep_purple_800 w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  69
                                </Text>
                                <Text
                                  className="mb-[45px] not-italic text-center text-deep_purple_800 w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  82
                                </Text>
                                <Text
                                  className="my-[22px] not-italic text-center text-deep_purple_800 w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  71
                                </Text>
                                <Text
                                  className="mt-[45px] not-italic text-center text-deep_purple_800 w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  61
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row items-center justify-end ml-[auto] md:w-[100%] w-[83%]">
                            <Text
                              className="not-italic text-center text-deep_purple_800 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              9 Apr
                            </Text>
                            <Text
                              className="ml-[39px] not-italic text-center text-deep_purple_800 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              10 Apr
                            </Text>
                            <Text
                              className="ml-[37px] not-italic text-center text-deep_purple_800 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              11 Apr
                            </Text>
                            <Text
                              className="ml-[36px] not-italic text-center text-deep_purple_800 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              12 Apr
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-gray_904 flex flex-row md:gap-[20px] inset-x-[0] items-center justify-start max-w-[1320px] mx-[auto] p-[14px] md:px-[20px] top-[0] w-[100%]">
          <div className="bg-bluegray_902 flex flex-row gap-[16px] items-center justify-start ml-[18px] my-[10px] p-[8px] rounded-[26px] w-[39%]">
            <Img
              src="images/img_search_white_a700_24x24.svg"
              className="h-[24px] ml-[16px] w-[24px]"
              alt="search Four"
            />
            <Line className="bg-bluegray_501 h-[36px] w-[1px]" />
            <Text
              className="font-medium text-left text-white_A700 w-[auto]"
              variant="body5"
            >
              Search...
            </Text>
          </div>
          <Button className="bg-bluegray_903 flex h-[52px] items-center justify-center ml-[278px] my-[10px] p-[14px] rounded-[50%] w-[52px]">
            <Img
              src="images/img_car_white_a700.svg"
              className="h-[24px]"
              alt="car"
            />
          </Button>
          <Button className="bg-bluegray_903 flex h-[52px] items-center justify-center ml-[16px] my-[10px] p-[14px] rounded-[50%] w-[52px]">
            <Img
              src="images/img_notification_white_a700.svg"
              className="h-[24px]"
              alt="notification"
            />
          </Button>
          <Line className="bg-bluegray_800 h-[72px] ml-[24px] w-[1px]" />
          <div className="flex flex-row items-center justify-between ml-[24px] w-[24%]">
            <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
              <div className="bg-bluegray_500 h-[52px] rounded-[50%] w-[52px]"></div>
              <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                <Text
                  className="font-semibold text-left text-white_A700 w-[auto]"
                  variant="body3"
                >
                  Albert Kennedy
                </Text>
                <Text
                  className="font-normal not-italic text-gray_302 text-left w-[auto]"
                  variant="body5"
                >
                  albert@gmail.com
                </Text>
              </div>
            </div>
            <Img
              src="images/img_arrowdown.svg"
              className="h-[18px] w-[18px]"
              alt="arrowdown"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DekstopPage;
