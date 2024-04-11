import Image from "next/image";

export default function Home() {
  return (
    <div>
      <table border={"0"} cellSpacing={0}>
        <tr>
          <td class="appbar" style={{ verticalAlign: "middle", width: "240px", height: "35px" }}>
            <p style={{color: "#5B5B5B", fontSize: "22px", paddingLeft: "10px" }}>
              <img src="/image/driveicon.png" width={38} style={{ verticalAlign: "middle" }} />  Drive
            </p>
          </td>
          <td class="appbar" width={"1050px"} >
            <input class="search" disabled></input><input class="filter" placeholder="Search in Drive" />
          </td>
          <td class="appbar" style={{ verticalAlign: "middle", width: "150px" }} align="right">
            <p>
              <img src="/image/questionmark.png" style={{ width: "21px", margin: "7px" }} />
              <img src="/image/setting.png" style={{ width: "21px", margin: "7px" }} />
              <img src="/image/more.png" style={{ width: "21px", margin: "7px" }} />
            </p>
          </td>
          <td class="appbar"></td>
          <td class="appbar" style={{ verticalAlign: "middle", width: "40px" }} align="center">
            <img src="/image/profile.png" style={{ width: "35px" }} />
          </td>
        </tr>
        <tr>
          <td >
            <button type="button" class="new">New</button>
          </td>
          <td>
            <select class="mydrive">
              <option>My Drive</option>
              <option>New Folder</option>
              <option>Upload File</option>
              <option>Upload Folder</option>
              <option>Google Docs</option>
              <option>Google Sheets</option>
              <option>Google Slides</option>
              <option>Google Forms</option>
              <option>More</option>
            </select>
          </td>
          <td>
            <button type="button" class="correct"></button>
            <button type="button" class="list"></button>
            <button type="button" class="grid"></button>
            <button type="button" class="information" style={{ margin: "8px" }}></button>
          </td>
          <td></td>
          <td class="appbar" style={{ verticalAlign: "middle" }} align="center" width={40}>
            <button type="button" class="calendar"></button>
          </td>
        </tr>
      </table>
      <table border={0} cellSpacing={0}>
        <tr>
          <td style={{ verticalAlign: "top" }}>
            <table border={0} width={240} cellSpacing={3}>
              <tr>
                <td>
                  <button type="button" class="home">Home</button>
                </td>
              </tr>
              <tr>
                <td>
                  <button type="button" class="pointer1"></button><button type="button" class="drive">My Drive</button>
                </td>
              </tr>
              <tr>
                <td>
                  <button type="button" class="pointer2"></button><button type="button" class="computer">Computers</button>
                </td>
              </tr>
              <tr height="10"></tr>
              <tr>
                <td>
                  <button type="button" class="share">Shared with me</button>
                </td>
              </tr>
              <tr>
                <td>
                  <button type="button" class="recent">Recent</button>
                </td>
              </tr>
              <tr>
                <td>
                  <button type="button" class="starred">Starred</button>
                </td>
              </tr>
              <tr height="10"></tr>
              <tr>
                <td>
                  <button type="button" class="spam">Spam</button>
                </td>
              </tr>
              <tr>
                <td>
                  <button type="button" class="bin">Bin</button>
                </td>
              </tr>
              <tr>
                <td>
                  <button type="button" class="cloud">Storage (78% full)</button>
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "25px" }}>
                  <div class="container">
                    <div class="storagebar"></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <p style={{ fontSize: "12px", paddingLeft: "25px" }}>11.83 GB of 15 GB used</p>
                </td>
              </tr>
              <tr>
                <td align="center">
                  <button type="button" class="getmore" ><b>Get more storage</b></button>
                </td>
              </tr>
            </table>
          </td>
          <td class="title">
            <table border={0} width={1155} cellSpacing={0}>
              <tr>
                <td>
                  <div>
                    <select class="options1" style={{ margin: "3px" }}>
                      <option style={{ display: "none" }}>Type</option>
                      <option>Documents</option>
                      <option>Spreadsheets</option>
                      <option>Presentations</option>
                      <option>Forms</option>
                      <option>Photo & images</option>
                      <option>PDFs</option>
                      <option>Videos</option>
                      <option>Shortcuts</option>
                      <option>Folder</option>
                      <option>Sites</option>
                      <option>Audio</option>
                      <option>Drawings</option>
                      <option>Archives (zip)</option>
                    </select>
                    <select class="options2" style={{ margin: "3px" }}>
                      <option style={{ display: "none" }}>People</option>
                      <option>Search for people and groups</option>
                      <option>Anyone with the link</option>
                    </select>
                    <select class="options3" style={{ margin: "3px" }}>
                      <option style={{ display: "none" }}>Modified</option>
                      <option>Today</option>
                      <option>Last 7 days</option>
                      <option>Last 30 days</option>
                      <option>This year (2024)</option>
                      <option>Last year (2023)</option>
                      <option>Custom date range</option>
                    </select>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="tip1">
                  <p style={{ fontSize: "11px" }}>
                    <b>Change your start page? </b> 
                    Currently it's set to Home. You can change it any time in Settings.
                    <button type="button" class="tip2"><b>Change to My Drive</b></button>
                    <button type="button" class="close"></button>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <table border={"0"} cellSpacing={0} frame="void" rules="rows">
                    <tr style={{ fontSize: "11px" }} height="33px">
                      <td width="650"><b>Name ⭡</b></td>
                      <td width="160"><b>Owner</b></td>
                      <td width="160"><b>Last modified ▾</b></td>
                      <td width="105"><b>File size</b></td>
                      <td width="30"></td>
                      <td width="30"></td>
                      <td width="30"></td>
                      <td width="30"></td>
                      <td width="30"><button type="button" class="dotdotdot"></button></td>
                    </tr>
                    <tr style={{ fontSize: "11px" }} height="33px">
                      <td width="650" class="folder1"><b> 01 - Account, Insurance and Taxes</b></td>
                      <td width="160" class="owner" style={{ fontSize: "10px" }}>me</td>
                      <td width="160" style={{ fontSize: "10px" }}>7 May 2019 me</td>
                      <td width="105">─</td>
                      <td width="30"><button type="button" class="add"></button></td>
                      <td width="30"><button type="button" class="download"></button></td>
                      <td width="30"><button type="button" class="edit"></button></td>
                      <td width="30"><button type="button" class="fav"></button></td>
                      <td width="30"><button type="button" class="dotdotdot"></button></td>
                    </tr>
                    <tr style={{ fontSize: "11px" }} height="33px">
                      <td width="650" class="folder2"><b> 02 - eBook</b></td>
                      <td width="160" class="owner" style={{ fontSize: "10px" }}>me</td>
                      <td width="160" style={{ fontSize: "10px" }}>5 May 2019 me</td>
                      <td width="105">─</td>
                      <td width="30"></td>
                      <td width="30"></td>
                      <td width="30"></td>
                      <td width="30"></td>
                      <td width="30"><button type="button" class="dotdotdot"></button></td>
                    </tr>
                    <tr style={{ fontSize: "11px" }} height="33px">
                      <td width="650" class="folder3"><b> 03 - Pictures and Videos</b></td>
                      <td width="160" class="owner" style={{ fontSize: "10px" }}>me</td>
                      <td width="160" style={{ fontSize: "10px" }}>7 May 2019 me</td>
                      <td width="105">─</td>
                      <td width="30"></td>
                      <td width="30"></td>
                      <td width="30"></td>
                      <td width="30"></td>
                      <td width="30"><button type="button" class="dotdotdot"></button></td>
                    </tr>
                    <tr style={{ fontSize: "11px" }} height="33px">
                      <td width="650" class="folder4"><b> 04 - University Materials</b></td>
                      <td width="160" class="owner" style={{ fontSize: "10px" }}>me</td>
                      <td width="160" style={{ fontSize: "10px" }}>5 May 2019 me</td>
                      <td width="105">─</td>
                      <td width="30"></td>
                      <td width="30"></td>
                      <td width="30"></td>
                      <td width="30"></td>
                      <td width="30"><button type="button" class="dotdotdot"></button></td>
                    </tr>
                    <tr style={{ fontSize: "11px" }} height="33px">
                      <td width="650" class="folder5"><b> 05 - Backup</b></td>
                      <td width="160" class="owner" style={{ fontSize: "10px" }}>me</td>
                      <td width="160" style={{ fontSize: "10px" }}>5 May 2019 me</td>
                      <td width="105">─</td>
                      <td width="30"></td>
                      <td width="30"></td>
                      <td width="30"></td>
                      <td width="30"></td>
                      <td width="30"><button type="button" class="dotdotdot"></button></td>
                    </tr>
                    <tr style={{ fontSize: "11px" }} height="33px">
                      <td width="650" class="folder6"><b> 06 - Documents</b></td>
                      <td width="160" class="owner" style={{ fontSize: "10px" }}>me</td>
                      <td width="160" style={{ fontSize: "10px" }}>6 May 2019 me</td>
                      <td width="105">─</td>
                      <td width="30"></td>
                      <td width="30"></td>
                      <td width="30"></td>
                      <td width="30"></td>
                      <td width="30"><button type="button" class="dotdotdot"></button></td>
                    </tr>
                    <tr style={{ fontSize: "11px" }} height="33px">
                      <td width="650" class="folder7"><b> 07 - KUMATEN</b></td>
                      <td width="160" class="owner" style={{ fontSize: "10px" }}>me</td>
                      <td width="160" style={{ fontSize: "10px" }}>10 Jun 2021 me</td>
                      <td width="105">─</td>
                      <td width="30"></td>
                      <td width="30"></td>
                      <td width="30"></td>
                      <td width="30"></td>
                      <td width="30"><button type="button" class="dotdotdot"></button></td>
                    </tr>
                    <tr style={{ fontSize: "11px" }} height="33px">
                      <td width="650" class="folder8"><b> 08 - IoT Project</b></td>
                      <td width="160" class="owner" style={{ fontSize: "10px" }}>me</td>
                      <td width="160" style={{ fontSize: "10px" }}>10 Jun 2021 me</td>
                      <td width="105">─</td>
                      <td width="30"></td>
                      <td width="30"></td>
                      <td width="30"></td>
                      <td width="30"></td>
                      <td width="30"><button type="button" class="dotdotdot"></button></td>
                    </tr>
                    <tr style={{ fontSize: "11px" }} height="33px">
                      <td width="650" class="folder8"><b> 19 - Covid Antigen Test</b></td>
                      <td width="160" class="owner" style={{ fontSize: "10px" }}>me</td>
                      <td width="160" style={{ fontSize: "10px" }}>29 Jul 2021 me</td>
                      <td width="105">─</td>
                      <td width="30"></td>
                      <td width="30"></td>
                      <td width="30"></td>
                      <td width="30"></td>
                      <td width="30"><button type="button" class="dotdotdot"></button></td>
                    </tr>
                    <tr style={{ fontSize: "11px" }} height="33px">
                      <td width="650" class="folder8"><b> 64 - Outsource</b></td>
                      <td width="160" class="owner" style={{ fontSize: "10px" }}>me</td>
                      <td width="160" style={{ fontSize: "10px" }}>14 Oct 2022 me</td>
                      <td width="105">─</td>
                      <td width="30"></td>
                      <td width="30"></td>
                      <td width="30"></td>
                      <td width="30"></td>
                      <td width="30"><button type="button" class="dotdotdot"></button></td>
                    </tr>
                    <tr style={{ fontSize: "11px" }} height="33px">
                      <td width="650" class="folder8"><b> 99 - Others</b></td>
                      <td width="160" class="owner" style={{ fontSize: "10px" }}>me</td>
                      <td width="160" style={{ fontSize: "10px" }}>10 Jun 2021 me</td>
                      <td width="105">─</td>
                      <td width="30"></td>
                      <td width="30"></td>
                      <td width="30"></td>
                      <td width="30"></td>
                      <td width="30"><button type="button" class="dotdotdot"></button></td>
                    </tr>
                    <tr style={{ fontSize: "11px" }} height="33px">
                      <td width="650" class="folder9" style={{color:"#B6B6B6"}}><b>BD&Main-MB</b>
                      <img src="/image/bingray.png" width={12} style={{verticalAlign:"middle", marginLeft:"3px"}}/></td>
                      <td width="160" style={{ fontSize: "10px", color: "#3192CA" }}><b>Remove shortcut</b></td>
                      <td width="160" style={{ fontSize: "10px" }}></td>
                      <td width="105"></td>
                      <td width="30"></td>
                      <td width="30"></td>
                      <td width="30"></td>
                      <td width="30"></td>
                      <td width="30"><button type="button" class="dotdotdot"></button></td>
                    </tr>
                    <tr style={{ fontSize: "11px" }} height="33px">
                      <td width="650" class="folder10"><b> Card Meterials</b></td>
                      <td width="160" class="owner" style={{ fontSize: "10px" }}>me</td>
                      <td width="160" style={{ fontSize: "10px" }}>15 Jun 2022 me</td>
                      <td width="105">─</td>
                      <td width="30"></td>
                      <td width="30"></td>
                      <td width="30"></td>
                      <td width="30"></td>
                      <td width="30"><button type="button" class="dotdotdot"></button></td>
                    </tr>
                    <tr style={{ fontSize: "11px" }} height="33px">
                      <td width="650" class="folder9" style={{color:"#B6B6B6"}}><b> For Social</b>
                      <img src="/image/bingray.png" width={12} style={{verticalAlign:"middle", marginLeft:"3px"}}/></td>
                      <td width="160" style={{ fontSize: "10px", color: "#3192CA" }}><b>Remove shortcut</b></td>
                      <td width="160" style={{ fontSize: "10px" }}></td>
                      <td width="105"></td>
                      <td width="30"></td>
                      <td width="30"></td>
                      <td width="30"></td>
                      <td width="30"></td>
                      <td width="30"><button type="button" class="dotdotdot"></button></td>
                    </tr>
                    <tr></tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
          <td width={24}></td>
          <td width={40} class="appbar" style={{verticalAlign:"top"}} align="right">
            <table cellSpacing={0}>
              <tr>
                <td>
                  <button type="button" class="keep" style={{marginTop:"7px"}}></button>
                </td>
              </tr>
              <tr>
                <td>
                <button type="button" class="tasks" style={{marginTop:"13px"}}></button>
                </td>
              </tr>
              <tr>
                <td>
                  <button type="button" class="contact" style={{marginTop:"13px"}}></button>
                </td>
              </tr>
              <tr>
                <td style={{textAlign:"center"}}>
                  <p style={{fontSize:"8px" , color:"#DFDFDF"}}>────</p>
                </td>
              </tr>
              <tr>
                <td>
                  <button type="button" class="plus"></button>
                </td>
              </tr>
              <tr>
                <td style={{verticalAlign:"bottom"}} height={410}>
                <button type="button" class="arrow"></button>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  );
}
