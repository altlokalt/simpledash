import React from "react";

import { Img, Text, Input, Button, List, CheckBox, Line } from "components";
import { CloseSVG } from "../../assets/images";

const LoggedinnPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_908 flex font-montserrat items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col items-center justify-start w-[100%]">
          <header className="flex items-center justify-center md:px-[20px] w-[100%]">
            <div className="bg-gray_909 border-b-[1px] border-gray_910 border-solid flex flex-row md:gap-[20px] items-center justify-center p-[24px] sm:px-[20px] w-[100%]">
              <div className="header-row my-[4px]">
                <div className="flex flex-row items-center justify-center sm:pr-[20px] pr-[27px]">
                  <Img
                    src="images/img_grid.svg"
                    className="h-[32px] rounded-[50%] w-[32px]"
                    alt="grid"
                  />
                  <Img
                    src="images/img_file.svg"
                    className="h-[19px] ml-[5px] w-[auto]"
                    alt="file"
                  />
                </div>
                <div className="mobile-menu">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className="flex flex-row sm:hidden items-start justify-start ml-[55px] w-[auto]">
                <div className="flex flex-row gap-[8px] items-center justify-start p-[8px] w-[auto]">
                  <div className="flex items-center justify-start w-[auto]">
                    <Text
                      className="font-semibold text-left text-white_A700 w-[auto]"
                      variant="body5"
                    >
                      Marketplace
                    </Text>
                  </div>
                  <Img
                    src="images/img_arrowdown_white_a700.svg"
                    className="h-[20px] w-[20px]"
                    alt="arrowdown"
                  />
                </div>
                <div className="flex flex-row gap-[8px] items-center justify-start p-[8px] w-[auto]">
                  <div className="flex items-center justify-start w-[auto]">
                    <Text
                      className="font-semibold text-left text-white_A700 w-[auto]"
                      variant="body5"
                    >
                      Resources
                    </Text>
                  </div>
                  <Img
                    src="images/img_arrowdown_white_a700.svg"
                    className="h-[20px] w-[20px]"
                    alt="arrowdown One"
                  />
                </div>
              </div>
              <div className="flex sm:flex-1 sm:hidden items-start justify-start ml-[222px] sm:w-[100%] w-[356px]">
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="font-normal not-italic p-[0] text-[14px] placeholder:text-gray_601 text-gray_601 text-left w-[100%]"
                  wrapClassName="bg-gray_910 flex gap-[8px] px-[16px] py-[8px] w-[100%]"
                  name="InputNoLabel"
                  placeholder="Collection, item or User"
                  prefix={
                    <Img
                      src="images/img_search.svg"
                      className="cursor-pointer mr-[8px] my-[auto]"
                      alt="search"
                    />
                  }
                  suffix={
                    inputvalue?.length > 0 ? (
                      <CloseSVG
                        color="#7c876e"
                        className="cursor-pointer ml-[10px] my-[auto]"
                        onClick={() => setInputvalue("")}
                      />
                    ) : (
                      ""
                    )
                  }
                ></Input>
              </div>
              <div className="flex flex-row gap-[16px] sm:hidden items-start justify-start ml-[21px] w-[auto]">
                <ul className="flex sm:flex-col flex-row gap-[8px] sm:hidden items-start justify-start w-[auto] common-row-list">
                  <li className="sm:w-[100%] sm:my-[10px] w-[10%]">
                    <Button className="flex h-[40px] items-center justify-center p-[8px] rounded-[12px]">
                      <Img
                        src="images/img_minimize.svg"
                        className=""
                        alt="minimize"
                      />
                    </Button>
                  </li>
                  <li className="sm:w-[100%] sm:my-[10px] w-[10%]">
                    <Button className="flex h-[40px] items-center justify-center p-[8px] rounded-[12px]">
                      <Img
                        src="images/img_bellnotification.svg"
                        className=""
                        alt="bellnotification"
                      />
                    </Button>
                  </li>
                  <li className="sm:w-[100%] sm:my-[10px] text-center">
                    <Button
                      className="bg-gray_910 flex items-center justify-center min-w-[140px] px-[16px] py-[8px] rounded-[20px] text-center w-[auto]"
                      leftIcon={
                        <Img
                          src="images/img_close.svg"
                          className="mr-[4px] text-center"
                          alt="close"
                        />
                      }
                    >
                      <div className="bg-transparent cursor-pointer font-bold text-[14px] text-left text-white_A700">
                        BNB Chain
                      </div>
                    </Button>
                  </li>
                  <li className="sm:w-[100%] sm:my-[10px] text-center">
                    <Button className="bg-lime_A400 cursor-pointer font-bold px-[16px] py-[8px] rounded-[20px] text-[14px] text-black_901 text-center">
                      Create NFT
                    </Button>
                  </li>
                </ul>
                <Img
                  src="images/img_arrowleft.svg"
                  className="h-[40px] w-[40px]"
                  alt="arrowleft"
                />
              </div>
            </div>
          </header>
          <div className="flex md:flex-col flex-row font-quicksand md:gap-[40px] items-center justify-between max-w-[1645px] mt-[14px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[66%]">
              <div className="flex flex-col gap-[14px] justify-start md:w-[100%] w-[91%]">
                <div className="flex flex-row gap-[4px] items-center justify-center sm:justify-start md:ml-[0] ml-[28px] md:w-[100%] w-[auto]">
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
                      AS/ENK
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
                      Sentrum/Hjørne butikker
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
                      Nisje/Hobbyist
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
                      Handle Lokale Torget
                    </Text>
                  </div>
                </div>
                <div className="h-[371px] relative w-[100%]">
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
                  <div className="absolute bg-gradient1  flex sm:flex-col flex-row h-[100%] inset-[0] items-end sm:items-start sm:justify-between justify-center m-[auto] p-[94px] sm:px-[20px] md:px-[40px] w-[100%]">
                    <Button className="bg-white_A700_4c border-[1px] border-solid border-white_A700 flex h-[42px] items-center justify-center mb-[75px] mt-[66px] rounded-[50%] w-[42px]">
                      <Img
                        src="images/img_arrowright_white_a700.svg"
                        className=""
                        alt="arrowright"
                      />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[23px] items-start justify-start mt-[27px] md:w-[100%] w-[90%]">
                <div className="flex flex-row sm:gap-[40px] items-center justify-between md:w-[100%] w-[92%]">
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
                      alt="arrowright One"
                    />
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row md:gap-[46px] items-start justify-between w-[100%]">
                  <div className="flex sm:flex-1 items-center justify-start sm:w-[100%] w-[42%]">
                    <div
                      className="bg-cover bg-gray_301 bg-no-repeat h-[186px] md:h-[403px] relative w-[100%]"
                      style={{
                        backgroundImage:
                          "url('images/img_maskgroup_200x433.png')",
                      }}
                    >
                      <Img
                        src="images/img_rectangle21.png"
                        className="h-[186px] m-[auto] object-cover rounded-[12px] w-[100%]"
                        alt="RectangleTwentyOne"
                      />
                      <div className="absolute bg-bluegray_201 flex sm:flex-row inset-x-[0] items-start justify-end mx-[auto] p-[17px] rounded-[12px] top-[0] w-[100%]">
                        <div className="md:h-[368px] h-[85px] mb-[68px] mt-[215px] relative w-[86%]">
                          <div className="absolute bg-black_900_51 border-[1px] border-solid border-white_A700 flex h-[100%] inset-[0] items-center justify-center m-[auto] rounded-[8px] w-[97%]">
                            <div className="flex flex-col gap-[18px] items-start justify-start mt-[20px] md:w-[100%] w-[80%]">
                              <div className="flex flex-row gap-[26px] items-start justify-between md:ml-[0] ml-[3px] md:w-[100%] w-[99%]">
                                <Text
                                  className="font-semibold text-left text-white_A700 w-[auto]"
                                  variant="body2"
                                >
                                  17-03-2023 Kl: 14:29
                                </Text>
                                <Text
                                  className="font-semibold text-left text-white_A700 w-[auto]"
                                  variant="body2"
                                >
                                  KONSERT
                                </Text>
                              </div>
                              <Text
                                className="font-semibold text-left text-white_A700 w-[auto]"
                                variant="body4"
                              >
                                GRATIS
                              </Text>
                            </div>
                          </div>
                          <Text
                            className="absolute bottom-[0] font-semibold right-[0] text-left text-white_A700 sm:w-[100%] w-[44%]"
                            variant="body2"
                          >
                            Horten kommune
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-1 items-center justify-start sm:w-[100%] w-[54%]">
                    <div
                      className="bg-cover bg-gray_301 bg-no-repeat h-[200px] md:h-[434px] relative w-[100%]"
                      style={{
                        backgroundImage:
                          "url('images/img_maskgroup_200x433.png')",
                      }}
                    >
                      <Img
                        src="images/img_rectangle21.png"
                        className="h-[200px] m-[auto] object-cover rounded-[12px] w-[100%]"
                        alt="RectangleTwentyOne One"
                      />
                      <div className="absolute bg-bluegray_201 flex inset-x-[0] items-start justify-end mx-[auto] p-[22px] sm:px-[20px] rounded-[12px] top-[0] w-[100%]">
                        <div className="md:h-[388px] h-[92px] mb-[69px] mt-[227px] relative sm:w-[100%] w-[83%]">
                          <div className="absolute bg-black_900_51 border-[1px] border-solid border-white_A700 flex h-[100%] inset-[0] items-start justify-center m-[auto] p-[2px] rounded-[8px] w-[100%]">
                            <div className="flex flex-col gap-[21px] items-start justify-start md:ml-[0] ml-[31px] mt-[20px] md:w-[100%] w-[74%]">
                              <div className="flex flex-row gap-[32px] items-start justify-between md:ml-[0] ml-[4px] md:w-[100%] w-[99%]">
                                <Text
                                  className="font-semibold text-left text-white_A700 w-[auto]"
                                  variant="body2"
                                >
                                  17-03-2023 Kl: 14:29
                                </Text>
                                <Text
                                  className="font-semibold text-left text-white_A700 w-[auto]"
                                  variant="body2"
                                >
                                  KONSERT
                                </Text>
                              </div>
                              <Text
                                className="font-semibold text-left text-white_A700 w-[auto]"
                                variant="body4"
                              >
                                GRATIS
                              </Text>
                            </div>
                          </div>
                          <Text
                            className="absolute bottom-[15%] font-semibold right-[0] text-left text-white_A700 w-[auto]"
                            variant="body2"
                          >
                            Horten kommune
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sm:flex sm:flex-row font-plusjakartasans md:h-[414px] h-[534px] md:ml-[0] ml-[5px] mt-[42px] relative md:w-[100%] w-[84%]">
                <div className="absolute flex flex-row gap-[15px] h-[28px] md:h-[auto] inset-x-[0] items-center justify-between max-w-[900px] mx-[auto] top-[20%] w-[100%]">
                  <Text
                    className="flex-1 sm:flex-row font-bold sm:hidden text-left text-white_A700 tracking-[-0.66px] w-[auto]"
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
                <div className="absolute md:h-[369px] h-[534px] inset-y-[0] left-[0] my-[auto] w-[33%]">
                  <div className="absolute bg-white_A700 bottom-[0] flex flex-col gap-[14px] sm:hidden inset-x-[0] items-center justify-center mx-[auto] p-[15px] rounded-[8px] shadow-bs w-[98%]">
                    <div className="bg-black_900_26 flex items-center justify-start mt-[48px] p-[57px] sm:px-[20px] md:px-[40px] rounded-[4px] w-[100%]">
                      <Button className="bg-white_A700_7f border-[1px] border-solid border-white_A700_66 cursor-pointer font-medium leading-[normal] min-w-[142px] my-[18px] py-[8px] rounded-[4px] text-[16px] text-center text-white_A700 tracking-[-0.16px] w-[auto]">
                        Place a Bid
                      </Button>
                    </div>
                    <div className="flex items-center justify-start md:w-[100%] w-[97%]">
                      <div className="flex flex-col gap-[14px] items-center justify-start w-[100%]">
                        <Input
                          className="border-b-[1px] border-blue_A400 font-medium leading-[normal] pb-[12px] sm:pr-[20px] pr-[35px] text-[18px] text-left placeholder:text-white_A700 text-white_A700 tracking-[-0.54px] w-[100%]"
                          wrapClassName="w-[100%]"
                          name="GroupEightySix"
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
                  <div className="absolute flex flex-row sm:hidden items-end justify-between right-[0] top-[0] w-[94%]">
                    <div className="flex flex-row gap-[15px] items-center justify-center mt-[176px] w-[auto]">
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
                    <Img
                      src="images/img_group427320296.svg"
                      className="h-[210px] mb-[4px] w-[auto]"
                      alt="Group427320296"
                    />
                  </div>
                </div>
                <div className="absolute bottom-[0] flex flex-row gap-[20px] sm:hidden items-center justify-between right-[0] w-[66%]">
                  <div className="bg-white_A700 flex items-center justify-start p-[14px] rounded-[8px] shadow-bs1 w-[49%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
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
                      <div className="bg-bluegray_50 h-[188px] mt-[11px] rounded-[4px] w-[100%]"></div>
                      <Input
                        className="border-b-[1px] border-blue_A400 font-medium leading-[normal] pb-[12px] sm:pr-[20px] pr-[35px] text-[18px] text-left placeholder:text-white_A700 text-white_A700 tracking-[-0.54px] w-[100%]"
                        wrapClassName="mt-[14px] sm:w-[100%] w-[97%]"
                        name="GroupEightyEight"
                        placeholder="Green Tree Human Art"
                      ></Input>
                      <div className="flex flex-row items-center justify-between mt-[13px] md:w-[100%] w-[97%]">
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
                  <div className="bg-white_A700 flex items-center justify-start p-[14px] rounded-[8px] shadow-bs1 w-[49%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
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
                      <div className="bg-bluegray_50 h-[188px] mt-[11px] rounded-[4px] w-[100%]"></div>
                      <Input
                        className="border-b-[1px] border-blue_A400 font-medium leading-[normal] pb-[12px] sm:pr-[20px] pr-[35px] text-[18px] text-left placeholder:text-white_A700 text-white_A700 tracking-[-0.54px] w-[100%]"
                        wrapClassName="mt-[14px] sm:w-[100%] w-[97%]"
                        name="GroupNinety"
                        placeholder="White Tree Human Art"
                      ></Input>
                      <div className="flex flex-row items-center justify-between mt-[13px] md:w-[100%] w-[97%]">
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
              <div className="flex font-rubik items-center justify-start md:ml-[0] ml-[5px] mt-[37px] md:w-[100%] w-[92%]">
                <div className="flex flex-col gap-[23px] items-start justify-start w-[100%]">
                  <Text
                    className="font-semibold text-left text-white_A700 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Top Collectibles
                  </Text>
                  <List
                    className="flex flex-row font-roboto gap-[27px] grid-cols-3 justify-center w-[100%]"
                    orientation="horizontal"
                  >
                    <div className="bg-white_A700 flex flex-1 flex-col gap-[21px] items-center justify-start p-[20px] rounded-[40px] w-[100%]">
                      <div className="h-[261px] relative w-[100%]">
                        <Img
                          src="images/img_imagedirty.png"
                          className="h-[261px] m-[auto] object-cover rounded-[40px] w-[100%]"
                          alt="ImageDirty"
                        />
                        <Button className="absolute bg-gray_700 cursor-pointer font-normal leading-[normal] min-w-[118px] not-italic py-[7px] right-[8%] rounded-[15px] text-[14px] text-center text-white_A700 top-[7%] w-[auto]">
                          03h 06m 34s{" "}
                        </Button>
                        <Button className="absolute bg-white_A700 bottom-[8%] flex items-center justify-center left-[8%] p-[8px] rounded-[20px] w-[40px]">
                          <Img
                            src="images/img_play.svg"
                            className="h-[20px]"
                            alt="play"
                          />
                        </Button>
                      </div>
                      <div className="font-rubik md:h-[104px] h-[99px] mb-[7px] relative w-[95%]">
                        <div className="absolute flex h-[max-content] inset-[0] items-center justify-center m-[auto] w-[100%]">
                          <div className="flex flex-col items-start justify-start w-[100%]">
                            <div className="flex flex-row gap-[140px] items-start justify-start md:w-[100%] w-[92%]">
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
                            <div className="flex flex-row items-center justify-between mt-[23px] w-[100%]">
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
                          className="absolute h-[19px] object-cover right-[0] top-[0] w-[20px]"
                          alt="Heart"
                        />
                        <Img
                          src="images/img_tick.png"
                          className="absolute h-[19px] left-[27%] object-cover top-[0] w-[20px]"
                          alt="TickOne"
                        />
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col gap-[21px] items-center justify-start p-[20px] rounded-[40px] w-[100%]">
                      <div className="h-[261px] relative w-[100%]">
                        <Img
                          src="images/img_imagedzcutie.png"
                          className="h-[261px] m-[auto] object-cover rounded-[40px] w-[100%]"
                          alt="ImageDzCutie"
                        />
                        <Button className="absolute bg-gray_700 cursor-pointer font-normal leading-[normal] min-w-[118px] not-italic py-[7px] right-[8%] rounded-[15px] text-[14px] text-center text-white_A700 top-[7%] w-[auto]">
                          03h 06m 34s{" "}
                        </Button>
                        <Button className="absolute bg-white_A700 bottom-[8%] flex items-center justify-center left-[8%] p-[8px] rounded-[20px] w-[40px]">
                          <Img
                            src="images/img_play.svg"
                            className="h-[20px]"
                            alt="play One"
                          />
                        </Button>
                      </div>
                      <div className="font-rubik md:h-[104px] h-[99px] mb-[7px] relative w-[95%]">
                        <div className="absolute flex h-[max-content] inset-[0] items-center justify-center m-[auto] w-[99%]">
                          <div className="flex flex-col items-start justify-start w-[100%]">
                            <div className="flex flex-row gap-[120px] items-center justify-start md:w-[100%] w-[93%]">
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
                              className="font-medium mt-[8px] text-left text-white_A700 w-[auto]"
                              variant="body2"
                            >
                              DzCutie Coin #100
                            </Text>
                            <div className="flex flex-row items-center justify-between mt-[25px] w-[100%]">
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
                          className="absolute h-[19px] object-cover right-[0] top-[0] w-[20px]"
                          alt="Heart One"
                        />
                        <Img
                          src="images/img_tick.png"
                          className="absolute h-[19px] left-[35%] object-cover top-[0] w-[20px]"
                          alt="TickTwo"
                        />
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col gap-[21px] items-center justify-start p-[20px] rounded-[40px] w-[100%]">
                      <div className="h-[261px] relative w-[100%]">
                        <Img
                          src="images/img_imagekolo.png"
                          className="h-[261px] m-[auto] object-cover rounded-[40px] w-[100%]"
                          alt="ImageKolo"
                        />
                        <Button className="absolute bg-gray_700 cursor-pointer font-normal leading-[normal] min-w-[118px] not-italic py-[7px] right-[8%] rounded-[15px] text-[14px] text-center text-white_A700 top-[7%] w-[auto]">
                          03h 06m 34s{" "}
                        </Button>
                        <Button className="absolute bg-white_A700 bottom-[8%] flex items-center justify-center left-[8%] p-[8px] rounded-[20px] w-[40px]">
                          <Img
                            src="images/img_play.svg"
                            className="h-[20px]"
                            alt="play Two"
                          />
                        </Button>
                      </div>
                      <div className="font-rubik md:h-[104px] h-[99px] mb-[7px] relative w-[95%]">
                        <div className="absolute flex h-[max-content] inset-y-[0] items-center justify-start left-[0] my-[auto] w-[96%]">
                          <div className="flex flex-col items-start justify-start w-[100%]">
                            <div className="flex flex-row gap-[144px] items-center justify-start md:w-[100%] w-[93%]">
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
                              className="font-medium mt-[8px] text-left text-white_A700 w-[auto]"
                              variant="body2"
                            >
                              Kolo Coin #150
                            </Text>
                            <div className="flex flex-row items-center justify-between mt-[25px] w-[100%]">
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
                          className="absolute h-[19px] object-cover right-[0] top-[0] w-[20px]"
                          alt="Heart Two"
                        />
                        <Img
                          src="images/img_tick.png"
                          className="absolute h-[19px] left-[25%] object-cover top-[0] w-[20px]"
                          alt="TickThree"
                        />
                      </div>
                    </div>
                  </List>
                </div>
              </div>
              <div className="flex font-rubik items-center justify-start md:ml-[0] ml-[9px] mt-[37px] w-[100%]">
                <div className="flex flex-col gap-[13px] items-start justify-start w-[100%]">
                  <Text
                    className="font-semibold text-left text-white_A700 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Analysis
                  </Text>
                  <div className="flex flex-row gap-[30px] items-center justify-between w-[100%]">
                    <div className="bg-deep_purple_A200 flex items-center justify-end p-[25px] sm:px-[20px] rounded-[40px] w-[58%]">
                      <div className="flex sm:flex-col flex-row gap-[36px] items-start justify-between md:w-[100%] w-[97%]">
                        <div className="flex flex-col gap-[29px] items-start justify-start sm:mt-[0] mt-[21px] sm:w-[100%] w-[auto]">
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
                          <Text
                            className="bg-white_A700 font-normal h-[25px] not-italic pb-[2px] pl-[10px] pr-[18px] pt-[5px] rounded-[12px] text-deep_purple_A200 text-left w-[107px]"
                            variant="body5"
                          >
                            Access now
                          </Text>
                        </div>
                        <Img
                          src="images/img_image3d.png"
                          className="h-[202px] sm:h-[auto] object-cover md:w-[100%] w-[auto]"
                          alt="Image3d"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-start w-[40%]">
                      <div className="bg-white_A700 md:h-[194px] h-[254px] p-[17px] relative rounded-[40px] w-[100%]">
                        <Text
                          className="absolute font-semibold right-[10%] text-left text-white_A700 top-[7%] w-[auto]"
                          variant="body1"
                        >
                          Earning/month
                        </Text>
                        <div className="absolute bottom-[7%] flex font-roboto inset-x-[0] items-center justify-start mx-[auto] w-[68%]">
                          <div className="flex flex-row gap-[24px] items-start justify-between w-[100%]">
                            <div className="flex flex-col items-start justify-start mb-[8px] w-[auto]">
                              <Text
                                className="not-italic text-deep_purple_800 text-right w-[auto]"
                                as="h1"
                                variant="h1"
                              >
                                100
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[4px] mt-[32px] not-italic text-deep_purple_800 text-right w-[auto]"
                                as="h1"
                                variant="h1"
                              >
                                75
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[4px] mt-[32px] not-italic text-deep_purple_800 text-right w-[auto]"
                                as="h1"
                                variant="h1"
                              >
                                50
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[4px] mt-[32px] not-italic text-deep_purple_800 text-right w-[auto]"
                                as="h1"
                                variant="h1"
                              >
                                25
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[9px] mt-[32px] not-italic text-deep_purple_800 text-right w-[auto]"
                                as="h1"
                                variant="h1"
                              >
                                0
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start mt-[12px] w-[87%]">
                              <div className="md:h-[155px] h-[169px] relative w-[100%]">
                                <div className="md:h-[155px] h-[169px] m-[auto] w-[100%]">
                                  <div className="absolute bottom-[0] h-[155px] inset-x-[0] mx-[auto] w-[100%]">
                                    <Img
                                      src="images/img_columns1.svg"
                                      className="absolute h-[155px] inset-y-[0] left-[0] my-[auto] w-[auto]"
                                      alt="ColumnsOne"
                                    />
                                    <Img
                                      src="images/img_columns2.svg"
                                      className="absolute bottom-[0] h-[144px] right-[0] w-[auto]"
                                      alt="ColumnsTwo"
                                    />
                                  </div>
                                  <div className="absolute flex flex-row items-start justify-between left-[1%] top-[0] w-[90%]">
                                    <Text
                                      className="h-[11px] mb-[5px] mt-[84px] not-italic text-center text-deep_purple_800 w-[auto]"
                                      as="h1"
                                      variant="h1"
                                    >
                                      40
                                    </Text>
                                    <Text
                                      className="h-[11px] mb-[89px] not-italic text-center text-deep_purple_800 w-[auto]"
                                      as="h1"
                                      variant="h1"
                                    >
                                      88
                                    </Text>
                                    <Text
                                      className="h-[11px] mb-[40px] mt-[49px] not-italic text-center text-deep_purple_800 w-[auto]"
                                      as="h1"
                                      variant="h1"
                                    >
                                      60
                                    </Text>
                                    <Text
                                      className="h-[11px] mt-[89px] not-italic text-center text-deep_purple_800 w-[auto]"
                                      as="h1"
                                      variant="h1"
                                    >
                                      37
                                    </Text>
                                  </div>
                                </div>
                                <div className="absolute flex flex-row items-start justify-between right-[2%] top-[6%] w-[89%]">
                                  <Text
                                    className="mb-[14px] mt-[22px] not-italic text-center text-deep_purple_800 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    69
                                  </Text>
                                  <Text
                                    className="h-[11px] mb-[37px] not-italic text-center text-deep_purple_800 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    82
                                  </Text>
                                  <Text
                                    className="my-[18px] not-italic text-center text-deep_purple_800 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    71
                                  </Text>
                                  <Text
                                    className="mt-[37px] not-italic text-center text-deep_purple_800 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    61
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-row items-center justify-between md:w-[100%] w-[95%]">
                                <Text
                                  className="not-italic text-center text-deep_purple_800 w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  9 Apr
                                </Text>
                                <Text
                                  className="not-italic text-center text-deep_purple_800 w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  10 Apr
                                </Text>
                                <Text
                                  className="not-italic text-center text-deep_purple_800 w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  11 Apr
                                </Text>
                                <Text
                                  className="not-italic text-center text-deep_purple_800 w-[auto]"
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
            <div className="flex md:flex-1 flex-col gap-[29px] sm:hidden justify-start md:mt-[0] mt-[10px] md:w-[100%] w-[26%]">
              <div className="flex flex-col gap-[16px] items-start justify-start mr-[11px] sm:w-[100%] w-[411px]">
                <Text
                  className="text-left text-white_A700 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Velbekomme, Ainar
                </Text>
                <Text
                  className="font-normal not-italic text-gray_200 text-left w-[auto]"
                  variant="body4"
                >
                  Gled deg . Su vil ikke tror det eksisterte der du bor
                </Text>
              </div>
              <div className="flex flex-col gap-[17px] h-[2107px] md:h-[auto] items-start justify-start md:ml-[0] ml-[44px] sm:w-[100%] w-[378px]">
                <div className="flex h-[358px] items-center justify-start w-[358px]">
                  <div className="bg-gray_904 flex flex-col gap-[21px] h-[358px] items-start justify-center p-[24px] sm:px-[20px] rounded-[8px] w-[358px]">
                    <Text
                      className="font-medium mt-[2px] text-left text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Nylig lagt til
                    </Text>
                    <List
                      className="flex-col gap-[16px] grid items-center mb-[8px] w-[100%]"
                      orientation="vertical"
                    >
                      <div className="h-[50px] relative w-[310px]">
                        <div className="absolute flex flex-row gap-[8px] h-[100%] inset-y-[0] items-center justify-between left-[0] my-[auto] w-[auto]">
                          <div className="bg-bluegray_500 h-[50px] rounded-[50%] w-[50px]"></div>
                          <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                            <Text
                              className="font-medium text-gray_302 text-left w-[auto]"
                              variant="body5"
                            >
                              Finn billig drivstfoff nær deg
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                              variant="body6"
                            >
                              minfuel AS
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_overflowmenu.svg"
                          className="h-[24px] ml-[auto] my-[auto] w-[24px]"
                          alt="overflowmenu"
                        />
                        <div className="absolute flex flex-row h-[100%] inset-[0] items-center justify-between m-[auto] w-[310px]">
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
                            alt="overflowmenu One"
                          />
                        </div>
                      </div>
                      <div className="flex relative w-[310px]">
                        <div className="flex flex-row gap-[8px] items-center justify-between ml-[undefinedpx] my-[auto] w-[auto] z-[1]">
                          <div className="bg-bluegray_500 h-[50px] rounded-[50%] w-[50px]"></div>
                          <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                            <Text
                              className="font-medium text-gray_302 text-left w-[auto]"
                              variant="body5"
                            >
                              Mat planlegging innen ditt budsjett
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                              variant="body6"
                            >
                              matplan AS
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_overflowmenu.svg"
                          className="h-[24px] ml-[-5px] my-[auto] w-[24px] z-[1]"
                          alt="overflowmenu One"
                        />
                        <div className="flex flex-row items-center justify-between ml-[undefinedpx] mr-[auto] my-[auto] w-[310px] z-[1]">
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
                            alt="overflowmenu One One"
                          />
                        </div>
                      </div>
                      <div className="h-[50px] relative w-[310px]">
                        <div className="absolute flex flex-row gap-[8px] h-[100%] inset-y-[0] items-center justify-between left-[0] my-[auto] w-[auto]">
                          <div className="bg-bluegray_500 h-[50px] rounded-[50%] w-[50px]"></div>
                          <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                            <Text
                              className="font-medium text-gray_302 text-left w-[auto]"
                              variant="body5"
                            >
                              Nett samling av bilde & malerie
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                              variant="body6"
                            >
                              Vestfold kunst
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_overflowmenu.svg"
                          className="h-[24px] ml-[auto] my-[auto] w-[24px]"
                          alt="overflowmenu Two"
                        />
                        <div className="absolute flex flex-row h-[100%] inset-[0] items-center justify-between m-[auto] w-[310px]">
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
                            alt="overflowmenu One Two"
                          />
                        </div>
                      </div>
                      <div className="h-[50px] relative w-[310px]">
                        <div className="absolute flex flex-row gap-[8px] h-[100%] inset-y-[0] items-center justify-between left-[0] my-[auto] w-[auto]">
                          <div className="bg-bluegray_500 h-[50px] rounded-[50%] w-[50px]"></div>
                          <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                            <Text
                              className="font-medium text-gray_302 text-left w-[auto]"
                              variant="body5"
                            >
                              Kjøp og salg av nft{" "}
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                              variant="body6"
                            >
                              Valiantlynx.com
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_overflowmenu.svg"
                          className="h-[24px] ml-[auto] my-[auto] w-[24px]"
                          alt="overflowmenu Three"
                        />
                        <div className="absolute flex flex-row h-[100%] inset-[0] items-center justify-between m-[auto] w-[310px]">
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
                            alt="overflowmenu One Three"
                          />
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
                <div className="bg-gray_904 flex flex-col gap-[23px] items-start justify-end p-[24px] sm:px-[20px] rounded-[8px] md:w-[100%] w-[95%]">
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
                      alt="image Eleven"
                    />
                    <div className="absolute bg-bluegray_500 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[64px] sm:px-[20px] md:px-[40px] rounded-[8px] w-[100%]">
                      <Button className="bg-white_A700_33 flex items-center justify-center outline outline-[1px] outline-white_A700 p-[10px] rounded-[15px] w-[31px]">
                        <Img src="images/img_ic.svg" className="" alt="ic" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-gray_904 flex font-urbanist items-center justify-start p-[44px] sm:px-[20px] md:px-[40px] rounded-[8px] md:w-[100%] w-[95%]">
                  <div className="flex flex-col justify-start my-[6px] md:w-[100%] w-[99%]">
                    <Img
                      src="images/img_eye_white_a700.svg"
                      className="h-[61px] md:ml-[0] ml-[101px] w-[62px]"
                      alt="eye"
                    />
                    <Text
                      className="font-normal md:ml-[0] ml-[71px] mt-[19px] not-italic text-left text-white_A700 tracking-[0.18px] w-[auto]"
                      variant="body3"
                    >
                      Help Center
                    </Text>
                    <div className="flex flex-col gap-[36px] items-center justify-start mt-[18px] w-[100%]">
                      <Text
                        className="font-normal leading-[25.20px] not-italic text-center text-gray_400 tracking-[0.14px]"
                        variant="body5"
                      >
                        Having trouble in Enefti?
                        <br />
                        Please contact us for more question
                      </Text>
                      <Text
                        className="bg-white_A700 font-normal h-[49px] justify-center not-italic pb-[19px] pt-[13px] sm:px-[20px] px-[35px] rounded-[10px] text-center text-gray_912 tracking-[0.14px] w-[257px]"
                        variant="body5"
                      >
                        Go To Help Center
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-rubik items-start justify-start md:w-[100%] w-[86%]">
                  <Text
                    className="font-semibold text-left text-white_A700 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Featured Creators
                  </Text>
                  <Text
                    className="font-normal md:ml-[0] ml-[284px] mt-[4px] not-italic text-deep_purple_A200 text-left w-[auto]"
                    variant="body3"
                  >
                    All
                  </Text>
                  <div className="bg-gray_100 flex flex-col items-center justify-end md:ml-[0] ml-[2px] mt-[48px] p-[20px] rounded-[40px] w-[100%]">
                    <Img
                      src="images/img_image_116x108.png"
                      className="h-[116px] md:h-[auto] mt-[20px] object-cover rounded-[58px] sm:w-[100%] w-[39%]"
                      alt="Image Twelve"
                    />
                    <div className="flex flex-col font-roboto gap-[7px] items-center justify-start mt-[23px] md:w-[100%] w-[auto]">
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
                    <Button className="bg-deep_purple_A201 cursor-pointer font-normal leading-[normal] min-w-[235px] mt-[17px] not-italic py-[14px] rounded-[28px] sm:text-[18px] md:text-[20px] text-[22px] text-center text-white_A700 w-[auto]">
                      Join Now
                    </Button>
                  </div>
                  <div className="bg-gray_100 flex items-center justify-start md:ml-[0] ml-[2px] mt-[27px] p-[17px] rounded-[40px] w-[100%]">
                    <div className="flex flex-col items-start justify-start mb-[10px] md:w-[100%] w-[98%]">
                      <div className="h-[127px] md:h-[91px] relative w-[100%]">
                        <Img
                          src="images/img_sharp1.png"
                          className="absolute h-[81px] inset-x-[0] mx-[auto] object-cover rounded-[10px] top-[0] w-[100%]"
                          alt="SharpOne"
                        />
                        <Img
                          src="images/img_image_91x75.png"
                          className="absolute bottom-[0] h-[91px] inset-x-[0] mx-[auto] object-cover rounded-[45px] w-[27%]"
                          alt="Image Thirteen"
                        />
                      </div>
                      <div className="flex flex-row font-rubik items-start justify-start mt-[11px] w-[100%]">
                        <Text
                          className="text-left text-white_A700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Melody Layla
                        </Text>
                        <Img
                          src="images/img_tick.png"
                          className="h-[18px] md:h-[auto] mt-[6px] object-cover w-[6%]"
                          alt="Tick"
                        />
                        <Button className="bg-deep_purple_A200 cursor-pointer font-bold leading-[normal] min-w-[67px] ml-[69px] py-[4px] rounded-[15px] text-[20px] text-center text-white_A700 w-[auto]">
                          {" "}
                          Follow
                        </Button>
                      </div>
                      <Text
                        className="font-normal font-rubik mt-[5px] not-italic text-gray_501 text-left w-[auto]"
                        variant="body3"
                      >
                        @Melodylay
                      </Text>
                      <Text
                        className="font-normal font-roboto md:ml-[0] ml-[2px] mt-[18px] not-italic text-gray_501 text-left"
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
          </div>
          <div className="flex flex-col font-montserrat gap-[40px] items-start justify-start max-w-[1520px] mx-[auto] md:px-[20px] w-[100%]">
            <Text
              className="font-bold text-left text-white_A700 w-[auto]"
              as="h6"
              variant="h6"
            >
              More from Plato
            </Text>
            <div className="flex md:flex-col flex-row md:gap-[40px] gap-[80px] items-center justify-start w-[100%]">
              <div className="flex md:flex-col flex-row gap-[40px] items-start justify-start w-[100%]">
                <List
                  className="flex sm:flex-col flex-row gap-[40px] grid-cols-2 w-[49%]"
                  orientation="horizontal"
                >
                  <div className="bg-gray_909 flex flex-col items-center justify-start w-[100%]">
                    <div className="bg-gray_913 h-[350px] w-[350px]"></div>
                    <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                      <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                        <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                          <CheckBox
                            className="font-normal not-italic text-[14px] text-gray_601 text-left"
                            inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                            label="Plato"
                            name="PolychainMonsters"
                          ></CheckBox>
                          <Img
                            src="images/img_close.svg"
                            className="h-[24px] w-[24px]"
                            alt="close"
                          />
                        </div>
                        <div className="flex items-center justify-start w-[100%]">
                          <Text
                            className="font-semibold text-left text-white_A700 w-[auto]"
                            variant="body3"
                          >
                            Puppangy
                          </Text>
                        </div>
                      </div>
                      <Line className="bg-gray_913 h-[1px] w-[100%]" />
                      <div className="flex flex-row gap-[24px] items-start justify-start w-[100%]">
                        <div className="flex flex-1 flex-col gap-[4px] items-start justify-start w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_601 text-left w-[auto]"
                            variant="body6"
                          >
                            Current bid
                          </Text>
                          <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                            <Text
                              className="font-semibold text-left text-white_A700 w-[auto]"
                              variant="body4"
                            >
                              0.75 BUSD
                            </Text>
                            <Img
                              src="images/img_lightbulb.svg"
                              className="h-[24px] w-[24px]"
                              alt="lightbulb"
                            />
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col gap-[4px] items-start justify-start w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_601 text-left w-[auto]"
                            variant="body6"
                          >
                            Ends in
                          </Text>
                          <div className="flex items-start justify-start w-[auto]">
                            <Text
                              className="font-semibold text-left text-white_A700 w-[auto]"
                              variant="body4"
                            >
                              01 : 29 : 35
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray_909 flex flex-col items-center justify-start w-[100%]">
                    <div className="bg-gray_913 h-[350px] w-[350px]"></div>
                    <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                      <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                        <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                          <CheckBox
                            className="font-normal not-italic text-[14px] text-gray_601 text-left"
                            inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                            label="Plato"
                            name="PolychainMonsters One"
                          ></CheckBox>
                          <Img
                            src="images/img_close.svg"
                            className="h-[24px] w-[24px]"
                            alt="close One"
                          />
                        </div>
                        <div className="flex items-center justify-start w-[100%]">
                          <Text
                            className="font-semibold text-left text-white_A700 w-[auto]"
                            variant="body3"
                          >
                            Giraffe
                          </Text>
                        </div>
                      </div>
                      <Line className="bg-gray_913 h-[1px] w-[100%]" />
                      <div className="flex flex-row gap-[24px] items-start justify-start w-[100%]">
                        <div className="flex flex-1 flex-col gap-[4px] items-start justify-start w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_601 text-left w-[auto]"
                            variant="body6"
                          >
                            Current bid
                          </Text>
                          <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                            <Text
                              className="font-semibold text-left text-white_A700 w-[auto]"
                              variant="body4"
                            >
                              0.75 BUSD
                            </Text>
                            <Img
                              src="images/img_lightbulb.svg"
                              className="h-[24px] w-[24px]"
                              alt="lightbulb One"
                            />
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col gap-[4px] items-start justify-start w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_601 text-left w-[auto]"
                            variant="body6"
                          >
                            Ends in
                          </Text>
                          <div className="flex items-start justify-start w-[auto]">
                            <Text
                              className="font-semibold text-left text-white_A700 w-[auto]"
                              variant="body4"
                            >
                              01 : 29 : 35
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
                <div className="bg-gray_909 flex flex-1 flex-col items-start justify-start w-[100%]">
                  <div className="bg-gray_913 h-[350px] w-[350px]"></div>
                  <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[8px] items-start justify-between w-[100%]">
                        <CheckBox
                          className="font-normal not-italic text-[14px] text-gray_601 text-left"
                          inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                          label="Plato"
                          name="PolychainMonsters Two"
                        ></CheckBox>
                        <Img
                          src="images/img_close.svg"
                          className="h-[24px] w-[24px]"
                          alt="close Two"
                        />
                      </div>
                      <div className="flex items-center justify-start w-[100%]">
                        <Text
                          className="font-semibold text-left text-white_A700 w-[auto]"
                          variant="body3"
                        >
                          Neo
                        </Text>
                      </div>
                    </div>
                    <Line className="bg-gray_913 h-[1px] w-[100%]" />
                    <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_601 text-left w-[auto]"
                        variant="body6"
                      >
                        Price
                      </Text>
                      <Text
                        className="font-semibold text-left text-white_A700 w-[auto]"
                        variant="body4"
                      >
                        0.75 BUSD
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray_909 flex flex-1 flex-col items-center justify-start w-[100%]">
                  <div className="bg-gray_913 h-[350px] w-[350px]"></div>
                  <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                        <CheckBox
                          className="font-normal not-italic text-[14px] text-gray_601 text-left"
                          inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                          label="Plato"
                          name="PolychainMonsters Three"
                        ></CheckBox>
                        <Img
                          src="images/img_close.svg"
                          className="h-[24px] w-[24px]"
                          alt="close Three"
                        />
                      </div>
                      <div className="flex items-center justify-start w-[100%]">
                        <Text
                          className="font-semibold text-left text-white_A700 w-[auto]"
                          variant="body3"
                        >
                          Latiphi
                        </Text>
                      </div>
                    </div>
                    <Line className="bg-gray_913 h-[1px] w-[100%]" />
                    <div className="flex flex-row gap-[24px] items-start justify-start w-[100%]">
                      <div className="flex flex-1 flex-col gap-[4px] items-start justify-start w-[100%]">
                        <Text
                          className="font-normal not-italic text-gray_601 text-left w-[auto]"
                          variant="body6"
                        >
                          Current bid
                        </Text>
                        <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                          <Text
                            className="font-semibold text-left text-white_A700 w-[auto]"
                            variant="body4"
                          >
                            0.75 BUSD
                          </Text>
                          <Img
                            src="images/img_lightbulb.svg"
                            className="h-[24px] w-[24px]"
                            alt="lightbulb Two"
                          />
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col gap-[4px] items-start justify-start w-[100%]">
                        <Text
                          className="font-normal not-italic text-gray_601 text-left w-[auto]"
                          variant="body6"
                        >
                          Ends in
                        </Text>
                        <div className="flex items-start justify-start w-[auto]">
                          <Text
                            className="font-semibold text-left text-white_A700 w-[auto]"
                            variant="body4"
                          >
                            01 : 29 : 35
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Button className="border-[1px] border-lime_A400 border-solid cursor-pointer font-bold p-[16px] rounded-[28px] text-[16px] text-center text-lime_A400 w-[220px]">
                View More
              </Button>
            </div>
          </div>
          <div className="flex flex-col font-montserrat gap-[40px] items-start justify-start max-w-[1520px] mt-[80px] mx-[auto] md:px-[20px] w-[100%]">
            <Text
              className="font-bold text-left text-white_A700 w-[auto]"
              as="h6"
              variant="h6"
            >
              More from the seller
            </Text>
            <div className="flex md:flex-col flex-row md:gap-[40px] gap-[80px] items-center justify-start w-[100%]">
              <List
                className="flex sm:flex-col flex-row gap-[40px] grid-cols-4 justify-start w-[100%]"
                orientation="horizontal"
              >
                <div className="bg-gray_909 flex flex-1 flex-col items-start justify-start w-[100%]">
                  <div className="bg-gray_913 h-[350px] w-[350px]"></div>
                  <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[8px] items-start justify-between w-[100%]">
                        <div className="flex items-center justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_601 text-left w-[auto]"
                            variant="body5"
                          >
                            Doodle Apes{" "}
                          </Text>
                        </div>
                        <Img
                          src="images/img_close.svg"
                          className="h-[24px] w-[24px]"
                          alt="close Four"
                        />
                      </div>
                      <div className="flex items-center justify-start w-[100%]">
                        <Text
                          className="font-semibold text-left text-white_A700 w-[auto]"
                          variant="body3"
                        >
                          Wheel
                        </Text>
                      </div>
                    </div>
                    <Line className="bg-gray_913 h-[1px] w-[100%]" />
                    <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_601 text-left w-[auto]"
                        variant="body6"
                      >
                        Price
                      </Text>
                      <Text
                        className="font-semibold text-left text-white_A700 w-[auto]"
                        variant="body4"
                      >
                        0.75 BUSD
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray_909 flex flex-1 flex-col items-start justify-start w-[100%]">
                  <div className="bg-gray_913 h-[350px] w-[350px]"></div>
                  <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[8px] items-start justify-between w-[100%]">
                        <div className="flex items-center justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_601 text-left w-[auto]"
                            variant="body5"
                          >
                            Doodle Apes{" "}
                          </Text>
                        </div>
                        <Img
                          src="images/img_close.svg"
                          className="h-[24px] w-[24px]"
                          alt="close Five"
                        />
                      </div>
                      <div className="flex items-center justify-start w-[100%]">
                        <Text
                          className="font-semibold text-left text-white_A700 w-[auto]"
                          variant="body3"
                        >
                          Green car
                        </Text>
                      </div>
                    </div>
                    <Line className="bg-gray_913 h-[1px] w-[100%]" />
                    <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_601 text-left w-[auto]"
                        variant="body6"
                      >
                        Price
                      </Text>
                      <Text
                        className="font-semibold text-left text-white_A700 w-[auto]"
                        variant="body4"
                      >
                        0.75 BUSD
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray_909 flex flex-1 flex-col items-start justify-start w-[100%]">
                  <div className="bg-gray_913 h-[350px] w-[350px]"></div>
                  <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[8px] items-start justify-between w-[100%]">
                        <div className="flex items-center justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_601 text-left w-[auto]"
                            variant="body5"
                          >
                            Doodle Apes{" "}
                          </Text>
                        </div>
                        <Img
                          src="images/img_close.svg"
                          className="h-[24px] w-[24px]"
                          alt="close Six"
                        />
                      </div>
                      <div className="flex items-center justify-start w-[100%]">
                        <Text
                          className="font-semibold text-left text-white_A700 w-[auto]"
                          variant="body3"
                        >
                          Car-Free City
                        </Text>
                      </div>
                    </div>
                    <Line className="bg-gray_913 h-[1px] w-[100%]" />
                    <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_601 text-left w-[auto]"
                        variant="body6"
                      >
                        Price
                      </Text>
                      <Text
                        className="font-semibold text-left text-white_A700 w-[auto]"
                        variant="body4"
                      >
                        0.75 BUSD
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray_909 flex flex-1 flex-col items-start justify-start w-[100%]">
                  <div className="bg-gray_913 h-[350px] w-[350px]"></div>
                  <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[8px] items-start justify-between w-[100%]">
                        <div className="flex items-center justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_601 text-left w-[auto]"
                            variant="body5"
                          >
                            Doodle Apes{" "}
                          </Text>
                        </div>
                        <Img
                          src="images/img_close.svg"
                          className="h-[24px] w-[24px]"
                          alt="close Seven"
                        />
                      </div>
                      <div className="flex items-center justify-start w-[100%]">
                        <Text
                          className="font-semibold text-left text-white_A700 w-[auto]"
                          variant="body3"
                        >
                          Gold car
                        </Text>
                      </div>
                    </div>
                    <Line className="bg-gray_913 h-[1px] w-[100%]" />
                    <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_601 text-left w-[auto]"
                        variant="body6"
                      >
                        Price
                      </Text>
                      <Text
                        className="font-semibold text-left text-white_A700 w-[auto]"
                        variant="body4"
                      >
                        0.75 BUSD
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
              <Button className="border-[1px] border-lime_A400 border-solid cursor-pointer font-bold p-[16px] rounded-[28px] text-[16px] text-center text-lime_A400 w-[220px]">
                View More
              </Button>
            </div>
          </div>
          <div className="bg-gray_909 flex flex-col font-montserrat gap-[40px] items-center justify-center max-w-[1680px] mt-[180px] py-[180px] w-[100%]">
            <Text
              className="text-center text-white_A700 w-[auto]"
              as="h2"
              variant="h2"
            >
              Get the latest LABS updates
            </Text>
            <div className="flex items-start justify-start md:px-[20px] sm:w-[100%] w-[530px]">
              <div className="bg-gray_910 flex flex-row gap-[8px] items-start justify-start px-[16px] py-[20px] w-[100%]">
                <Text
                  className="flex-1 font-normal not-italic text-gray_601 text-left w-[auto]"
                  variant="body5"
                >
                  Your Email
                </Text>
                <Img
                  src="images/img_arrowright_white_a700_24x24.svg"
                  className="h-[24px] w-[24px]"
                  alt="arrowright Two"
                />
              </div>
            </div>
          </div>
          <footer className="bg-black_901 flex font-montserrat sm:hidden items-center justify-center md:px-[20px] w-[100%]">
            <div className="flex items-center justify-center mb-[41px] mt-[180px] mx-[auto] w-[91%]">
              <div className="flex flex-col items-center justify-center w-[100%]">
                <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:w-[100%] w-[96%]">
                  <div className="flex flex-col md:gap-[40px] gap-[80px] items-start justify-start md:w-[100%] w-[17%]">
                    <div className="flex flex-row gap-[9px] items-center justify-start sm:pr-[20px] md:pr-[40px] pr-[49px] w-[100%]">
                      <Img
                        src="images/img_grid.svg"
                        className="h-[58px] rounded-[50%] w-[58px]"
                        alt="grid One"
                      />
                      <Img
                        src="images/img_labs.svg"
                        className="h-[35px] w-[auto]"
                        alt="LABS"
                      />
                    </div>
                    <div className="flex flex-col gap-[24px] items-start justify-start w-[auto]">
                      <Text
                        className="font-semibold text-center text-white_A700 w-[auto]"
                        variant="body3"
                      >
                        Join LABS community
                      </Text>
                      <div className="flex flex-row gap-[24px] items-start justify-start w-[auto]">
                        <Img
                          src="images/img_icontwitter.svg"
                          className="h-[40px] w-[40px]"
                          alt="icontwitter"
                        />
                        <Img
                          src="images/img_send_white_a700.svg"
                          className="h-[40px] w-[40px]"
                          alt="send Four"
                        />
                        <Img
                          src="images/img_rewind.svg"
                          className="h-[40px] w-[40px]"
                          alt="rewind"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[40px] items-start justify-start md:ml-[0] ml-[275px] w-[auto]">
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      variant="body2"
                    >
                      Marketplace
                    </Text>
                    <ul className="flex flex-col gap-[40px] items-start justify-start md:w-[100%] w-[auto] common-column-list">
                      <li className="w-[auto]">
                        <Text
                          className="cursor-pointer font-normal not-italic text-gray_601 text-left"
                          variant="body3"
                        >
                          Home
                        </Text>
                      </li>
                      <li className="w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[18px] text-gray_601 text-left"
                          href="javascript:"
                        >
                          Explore
                        </a>
                      </li>
                      <li className="w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[18px] text-gray_601 text-left"
                          href="javascript:"
                        >
                          Activities
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-[40px] items-start justify-start md:ml-[0] ml-[259px] w-[auto]">
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      variant="body2"
                    >
                      Resources
                    </Text>
                    <div className="flex flex-col gap-[40px] items-start justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-gray_601 text-left w-[auto]"
                        variant="body3"
                      >
                        Help Center
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_601 text-left w-[auto]"
                        variant="body3"
                      >
                        FAQ
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[40px] items-start justify-start md:ml-[0] ml-[281px] w-[auto]">
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      variant="body2"
                    >
                      Links
                    </Text>
                    <div className="flex flex-col gap-[40px] items-start justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-gray_601 text-left w-[auto]"
                        variant="body3"
                      >
                        Privacy Policy
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_601 text-left w-[auto]"
                        variant="body3"
                      >
                        Terms of Service
                      </Text>
                    </div>
                  </div>
                </div>
                <Line className="bg-gray_802 h-[1px] mt-[160px] w-[100%]" />
                <Text
                  className="font-normal md:ml-[0] ml-[3px] mt-[27px] not-italic text-gray_601 text-left w-[auto]"
                  variant="body3"
                >
                  © LABS, Inc. All rights reserved.
                </Text>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default LoggedinnPage;
