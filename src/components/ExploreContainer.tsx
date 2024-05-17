import { useEffect, useRef, useState } from "react";
import { rotate } from "../functions/changeIpa";
import "./ExploreContainer.css";
import "./style.css";
import { IonButton } from "@ionic/react";
import postDataToStorage from "../api/postDataToStorage";



interface ContainerProps {
  name: string;

}
const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const refData = useRef("");
  const [state, setState] = useState(false);
  const [content, setContent] = useState("");
  
  useEffect(() => {
    const elm = document.getElementById("container");
    // const  containerUpload = [{ref: 'test/1', data: 'function f() { lead2_val = ["lid", "lɛd"]; knew2_val = ["nu", "nju"]; what2_val = ["wɑt", "wʌt"]; was2_val = ["wʌz", "wɑz"]; will2_val = ["wɪl", "wəl"]; your2_val = ["jʊər", "jɔr"]; you_re2_val = ["jʊr", "jur"]; i_m2_val = ["aɪm", "əm"]; with2_val = ["wɪð", "wɪθ"]; on2_val = ["ɑn", "ɔn"]; listening2_val = ["ˈlɪsənɪŋ", "ˈlɪsnɪŋ"]; our3_val = ["ˈaʊər", "aʊr", "ɑr"]; perfect2_val = ["ˈpɜrˌfɪkt", "pərˈfɛkt"]; tonight2_val = ["təˈnaɪt", "tuˈnaɪt"]; stronger2_val = ["ˈstrɔŋər", "ˈstrɔŋɡər"]; anyone2_val = ["ˈɛniˌwʌn", "ˈɛniwən"]; carry2_val = ["ˈkæri", "ˈkɛri"]; secrets2_val = ["ˈsikrəts", "ˈsikrɪts"]; we_re3_val = ["wir", "wɪr", "wɜr"]; against2_val = ["əˈɡɛnst", "əˈɡeɪnst"]; we_ll2_val = ["wil", "wɪl"]; man2_val = ["mæn", "mən"]; favorite2_val = ["ˈfeɪvərɪt", "ˈfeɪvrət"]; don_t2_val = ["doʊnt", "doʊn"]; console.log("check2"); }'}]
    // postDataToDB(containerUpload, console.log)
 

  }, []);
  return (
    <div id="container">
     
      <audio id="audio" controls src="https://firebasestorage.googleapis.com/v0/b/englishlearning-7cbbd.appspot.com/o/testname?alt=media&token=6e483b4e-22fb-4736-8de5-4bccac19029e"></audio>
      <div id="transcr_output">
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">I</div>
          <div className="inline_ipa">
            <span className="transcribed_word">aɪ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">found</div>
          <div className="inline_ipa">
            <span className="transcribed_word">faʊnd</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">a</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ə</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">love</div>
          <div className="inline_ipa">
            <span className="transcribed_word">lʌv</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">,&nbsp;</div>
          <div className="inline_ipa">
            <span className="nontranscriptable">,&nbsp;</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">for</div>
          <div className="inline_ipa">
            <span className="transcribed_word">fɔr</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">me</div>
          <div className="inline_ipa">
            <span className="transcribed_word">mi</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa">
            <span className="nontranscriptable" />
          </div>
        </div>
        <div className="clear_both">&nbsp;</div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">Darling</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ˈdɑrlɪŋ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">,&nbsp;</div>
          <div className="inline_ipa">
            <span className="nontranscriptable">,&nbsp;</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">just</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ʤʌst</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">dive</div>
          <div className="inline_ipa">
            <span className="transcribed_word">daɪv</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">right</div>
          <div className="inline_ipa">
            <span className="transcribed_word">raɪt</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">in</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ɪn</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">and</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ænd</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">follow</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ˈfɑloʊ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">my</div>
          <div className="inline_ipa">
            <span className="transcribed_word">maɪ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">lead</div>
          <div className="inline_ipa">
            <span className="transcribed_word">
              <a id="lead2_val" href="#" onClick={(e)=>rotate(e)} data-toggle="tooltip" data-html="true" title="" data-original-title="1. [lid]: <i>noun, adjective, verb</i><br />2. [lɛd]: <i>noun, verb</i>">
                lid
              </a>
            </span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa">
            <span className="nontranscriptable" />
          </div>
        </div>
        <div className="clear_both">&nbsp;</div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">Well</div>
          <div className="inline_ipa">
            <span className="transcribed_word">wɛl</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">,&nbsp;</div>
          <div className="inline_ipa">
            <span className="nontranscriptable">,&nbsp;</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">I</div>
          <div className="inline_ipa">
            <span className="transcribed_word">aɪ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">found</div>
          <div className="inline_ipa">
            <span className="transcribed_word">faʊnd</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">a</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ə</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">girl</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ɡɜrl</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">,&nbsp;</div>
          <div className="inline_ipa">
            <span className="nontranscriptable">,&nbsp;</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">beautiful</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ˈbjutəfəl</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">and</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ænd</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">sweet</div>
          <div className="inline_ipa">
            <span className="transcribed_word">swit</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa">
            <span className="nontranscriptable" />
          </div>
        </div>
        <div className="clear_both">&nbsp;</div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">Oh</div>
          <div className="inline_ipa">
            <span className="transcribed_word">oʊ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">,&nbsp;</div>
          <div className="inline_ipa">
            <span className="nontranscriptable">,&nbsp;</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">I</div>
          <div className="inline_ipa">
            <span className="transcribed_word">aɪ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">never</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ˈnɛvər</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">knew</div>
          <div className="inline_ipa">
            <span className="transcribed_word">
              <a id="knew2_val" href="#" onClick={(e)=>rotate(e)} data-toggle="tooltip" data-html="true" title="" data-original-title="1. [nu]<br />2. [nju]">
                nu
              </a>
            </span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">you</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ju</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">were</div>
          <div className="inline_ipa">
            <span className="transcribed_word">wɜr</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">the</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ðə</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">someone</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ˈsʌmˌwʌn</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">waiting</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ˈweɪtɪŋ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">for</div>
          <div className="inline_ipa">
            <span className="transcribed_word">fɔr</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">me</div>
          <div className="inline_ipa">
            <span className="transcribed_word">mi</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa">
            <span className="nontranscriptable" />
          </div>
        </div>
        <div className="clear_both">&nbsp;</div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">'Cause</div>
          <div className="inline_ipa">
            <span className="transcribed_word">kəz</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">we</div>
          <div className="inline_ipa">
            <span className="transcribed_word">wi</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">were</div>
          <div className="inline_ipa">
            <span className="transcribed_word">wɜr</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">just</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ʤʌst</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">kids</div>
          <div className="inline_ipa">
            <span className="transcribed_word">kɪdz</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">when</div>
          <div className="inline_ipa">
            <span className="transcribed_word">wɛn</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">we</div>
          <div className="inline_ipa">
            <span className="transcribed_word">wi</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">fell</div>
          <div className="inline_ipa">
            <span className="transcribed_word">fɛl</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">in</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ɪn</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">love</div>
          <div className="inline_ipa">
            <span className="transcribed_word">lʌv</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa">
            <span className="nontranscriptable" />
          </div>
        </div>
        <div className="clear_both">&nbsp;</div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">Not</div>
          <div className="inline_ipa">
            <span className="transcribed_word">nɑt</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">knowing</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ˈnoʊɪŋ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">what</div>
          <div className="inline_ipa">
            <span className="transcribed_word">
              <a id="what2_val" href="#" onClick={(e)=>rotate(e)} data-toggle="tooltip" data-html="true" title="" data-original-title="1. [wɑt]<br />2. [wʌt]">
                wɑt
              </a>
            </span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">it</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ɪt</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">was</div>
          <div className="inline_ipa">
            <span className="transcribed_word">
              <a id="was2_val" href="#" onClick={(e)=>rotate(e)} data-toggle="tooltip" data-html="true" title="" data-original-title="1. [wʌz]: <i>verb</i><br />2. [wɑz]: <i>verb</i>">
                wʌz
              </a>
            </span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa">
            <span className="nontranscriptable" />
          </div>
        </div>
        <div className="clear_both">&nbsp;</div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">I</div>
          <div className="inline_ipa">
            <span className="transcribed_word">aɪ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">will</div>
          <div className="inline_ipa">
            <span className="transcribed_word">
              <a id="will2_val" href="#" onClick={(e)=>rotate(e)} data-toggle="tooltip" data-html="true" title="" data-original-title="1. [wɪl]<br />2. [wəl]">
                wɪl
              </a>
            </span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">not</div>
          <div className="inline_ipa">
            <span className="transcribed_word">nɑt</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">give</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ɡɪv</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">you</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ju</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">up</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ʌp</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">this</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ðɪs</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">time</div>
          <div className="inline_ipa">
            <span className="transcribed_word">taɪm</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa">
            <span className="nontranscriptable" />
          </div>
        </div>
        <div className="clear_both">&nbsp;</div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">But</div>
          <div className="inline_ipa">
            <span className="transcribed_word">bʌt</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">darling</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ˈdɑrlɪŋ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">,&nbsp;</div>
          <div className="inline_ipa">
            <span className="nontranscriptable">,&nbsp;</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">just</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ʤʌst</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">kiss</div>
          <div className="inline_ipa">
            <span className="transcribed_word">kɪs</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">me</div>
          <div className="inline_ipa">
            <span className="transcribed_word">mi</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">slow</div>
          <div className="inline_ipa">
            <span className="transcribed_word">sloʊ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa">
            <span className="nontranscriptable" />
          </div>
        </div>
        <div className="clear_both">&nbsp;</div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">Your</div>
          <div className="inline_ipa">
            <span className="transcribed_word">
              <a id="your2_val" href="#" onClick={(e)=>rotate(e)} data-toggle="tooltip" data-html="true" title="" data-original-title="1. [jʊər]: <i>pronoun</i><br />2. [jɔr]: <i>pronoun</i>">
                jʊər
              </a>
            </span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">heart</div>
          <div className="inline_ipa">
            <span className="transcribed_word">hɑrt</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">is</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ɪz</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">all</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ɔl</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">I</div>
          <div className="inline_ipa">
            <span className="transcribed_word">aɪ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">own</div>
          <div className="inline_ipa">
            <span className="transcribed_word">oʊn</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa">
            <span className="nontranscriptable" />
          </div>
        </div>
        <div className="clear_both">&nbsp;</div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">And</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ænd</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">in</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ɪn</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">your</div>
          <div className="inline_ipa">
            <span className="transcribed_word">
              <a id="your2_val" href="#" onClick={(e)=>rotate(e)} data-toggle="tooltip" data-html="true" title="" data-original-title="1. [jʊər]: <i>pronoun</i><br />2. [jɔr]: <i>pronoun</i>">
                jʊər
              </a>
            </span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">eyes</div>
          <div className="inline_ipa">
            <span className="transcribed_word">aɪz</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">,&nbsp;</div>
          <div className="inline_ipa">
            <span className="nontranscriptable">,&nbsp;</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">you're</div>
          <div className="inline_ipa">
            <span className="transcribed_word">
              <a id="you_re2_val" href="#" onClick={(e)=>rotate(e)} data-toggle="tooltip" data-html="true" title="" data-original-title="1. [jʊr]<br />2. [jur]">
                jʊr
              </a>
            </span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">holding</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ˈhoʊldɪŋ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">mine</div>
          <div className="inline_ipa">
            <span className="transcribed_word">maɪn</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa">
            <span className="nontranscriptable" />
          </div>
        </div>
        <div className="clear_both">&nbsp;</div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">Baby</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ˈbeɪbi</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">,&nbsp;</div>
          <div className="inline_ipa">
            <span className="nontranscriptable">,&nbsp;</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">I'm</div>
          <div className="inline_ipa">
            <span className="transcribed_word">
              <a id="i_m2_val" href="#" onClick={(e)=>rotate(e)} data-toggle="tooltip" data-html="true" title="" data-original-title="1. [aɪm]<br />2. [əm]">
                aɪm
              </a>
            </span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">dancing</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ˈdænsɪŋ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">in</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ɪn</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">the</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ðə</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">dark</div>
          <div className="inline_ipa">
            <span className="transcribed_word">dɑrk</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa">
            <span className="nontranscriptable" />
          </div>
        </div>
        <div className="clear_both">&nbsp;</div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">With</div>
          <div className="inline_ipa">
            <span className="transcribed_word">
              <a id="with2_val" href="#" onClick={(e)=>rotate(e)} data-toggle="tooltip" data-html="true" title="" data-original-title="1. [wɪð]<br />2. [wɪθ]">
                wɪð
              </a>
            </span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">you</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ju</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">between</div>
          <div className="inline_ipa">
            <span className="transcribed_word">bɪˈtwin</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">my</div>
          <div className="inline_ipa">
            <span className="transcribed_word">maɪ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">arms</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ɑrmz</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa">
            <span className="nontranscriptable" />
          </div>
        </div>
        <div className="clear_both">&nbsp;</div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">Barefoot</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ˈbɛrˌfʊt</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">on</div>
          <div className="inline_ipa">
            <span className="transcribed_word">
              <a id="on2_val" href="#" onClick={(e)=>rotate(e)} data-toggle="tooltip" data-html="true" title="" data-original-title="1. [ɑn]<br />2. [ɔn]">
                ɑn
              </a>
            </span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">the</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ðə</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">grass</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ɡræs</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa">
            <span className="nontranscriptable" />
          </div>
        </div>
        <div className="clear_both">&nbsp;</div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">Listening</div>
          <div className="inline_ipa">
            <span className="transcribed_word">
              <a id="listening2_val" href="#" onClick={(e)=>rotate(e)} data-toggle="tooltip" data-html="true" title="" data-original-title="1. [ˈlɪsənɪŋ]<br />2. [ˈlɪsnɪŋ]">
                ˈlɪsənɪŋ
              </a>
            </span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">to</div>
          <div className="inline_ipa">
            <span className="transcribed_word">tu</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">our</div>
          <div className="inline_ipa">
            <span className="transcribed_word">
              <a id="our3_val" href="#" onClick={(e)=>rotate(e)} data-toggle="tooltip" data-html="true" title="" data-original-title="1. [ˈaʊər]<br />2. [aʊr]<br />3. [ɑr]">
                ˈaʊər
              </a>
            </span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">favourite</div>
          <div className="inline_ipa">
            <span className="transcription_missing">favourite</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">song</div>
          <div className="inline_ipa">
            <span className="transcribed_word">sɔŋ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa">
            <span className="nontranscriptable" />
          </div>
        </div>
        <div className="clear_both">&nbsp;</div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">When</div>
          <div className="inline_ipa">
            <span className="transcribed_word">wɛn</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">you</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ju</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">said</div>
          <div className="inline_ipa">
            <span className="transcribed_word">sɛd</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">you</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ju</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">looked</div>
          <div className="inline_ipa">
            <span className="transcribed_word">lʊkt</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">a</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ə</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">mess</div>
          <div className="inline_ipa">
            <span className="transcribed_word">mɛs</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa">
            <span className="nontranscriptable" />
          </div>
        </div>
        <div className="clear_both">&nbsp;</div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">I</div>
          <div className="inline_ipa">
            <span className="transcribed_word">aɪ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">whispered</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ˈwɪspərd</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">underneath</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ˌʌndərˈniθ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">my</div>
          <div className="inline_ipa">
            <span className="transcribed_word">maɪ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">breath</div>
          <div className="inline_ipa">
            <span className="transcribed_word">brɛθ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa">
            <span className="nontranscriptable" />
          </div>
        </div>
        <div className="clear_both">&nbsp;</div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">But</div>
          <div className="inline_ipa">
            <span className="transcribed_word">bʌt</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">you</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ju</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">heard</div>
          <div className="inline_ipa">
            <span className="transcribed_word">hɜrd</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">it</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ɪt</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa">
            <span className="nontranscriptable" />
          </div>
        </div>
        <div className="clear_both">&nbsp;</div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">Darling</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ˈdɑrlɪŋ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">,&nbsp;</div>
          <div className="inline_ipa">
            <span className="nontranscriptable">,&nbsp;</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">you</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ju</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">look</div>
          <div className="inline_ipa">
            <span className="transcribed_word">lʊk</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">perfect</div>
          <div className="inline_ipa">
            <span className="transcribed_word">
              <a id="perfect2_val" href="#" onClick={(e)=>rotate(e)} data-toggle="tooltip" data-html="true" title="" data-original-title="1. [ˈpɜrˌfɪkt]: <i>adjective, noun</i><br />2. [pərˈfɛkt]: <i>verb</i>">
                ˈpɜrˌfɪkt
              </a>
            </span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">tonight</div>
          <div className="inline_ipa">
            <span className="transcribed_word">
              <a id="tonight2_val" href="#" onClick={(e)=>rotate(e)} data-toggle="tooltip" data-html="true" title="" data-original-title="1. [təˈnaɪt]<br />2. [tuˈnaɪt]">
                təˈnaɪt
              </a>
            </span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa">
            <span className="nontranscriptable" />
          </div>
        </div>
        <div className="clear_both">&nbsp;</div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">Well</div>
          <div className="inline_ipa">
            <span className="transcribed_word">wɛl</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">,&nbsp;</div>
          <div className="inline_ipa">
            <span className="nontranscriptable">,&nbsp;</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">I</div>
          <div className="inline_ipa">
            <span className="transcribed_word">aɪ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">found</div>
          <div className="inline_ipa">
            <span className="transcribed_word">faʊnd</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">a</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ə</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">woman</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ˈwʊmən</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">,&nbsp;</div>
          <div className="inline_ipa">
            <span className="nontranscriptable">,&nbsp;</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">stronger</div>
          <div className="inline_ipa">
            <span className="transcribed_word">
              <a id="stronger2_val" href="#" onClick={(e)=>rotate(e)} data-toggle="tooltip" data-html="true" title="" data-original-title="1. [ˈstrɔŋər]<br />2. [ˈstrɔŋɡər]">
                ˈstrɔŋər
              </a>
            </span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">than</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ðæn</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">anyone</div>
          <div className="inline_ipa">
            <span className="transcribed_word">
              <a id="anyone2_val" href="#" onClick={(e)=>rotate(e)} data-toggle="tooltip" data-html="true" title="" data-original-title="1. [ˈɛniˌwʌn]<br />2. [ˈɛniwən]">
                ˈɛniˌwʌn
              </a>
            </span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">I</div>
          <div className="inline_ipa">
            <span className="transcribed_word">aɪ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">know</div>
          <div className="inline_ipa">
            <span className="transcribed_word">noʊ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa">
            <span className="nontranscriptable" />
          </div>
        </div>
        <div className="clear_both">&nbsp;</div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">She</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ʃi</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">shares</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ʃɛrz</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">my</div>
          <div className="inline_ipa">
            <span className="transcribed_word">maɪ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">dreams</div>
          <div className="inline_ipa">
            <span className="transcribed_word">drimz</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">,&nbsp;</div>
          <div className="inline_ipa">
            <span className="nontranscriptable">,&nbsp;</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">I</div>
          <div className="inline_ipa">
            <span className="transcribed_word">aɪ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">hope</div>
          <div className="inline_ipa">
            <span className="transcribed_word">hoʊp</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">that</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ðæt</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">someday</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ˈsʌmˌdeɪ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">I'll</div>
          <div className="inline_ipa">
            <span className="transcribed_word">aɪl</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">share</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ʃɛr</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">her</div>
          <div className="inline_ipa">
            <span className="transcribed_word">hɜr</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">home</div>
          <div className="inline_ipa">
            <span className="transcribed_word">hoʊm</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa">
            <span className="nontranscriptable" />
          </div>
        </div>
        <div className="clear_both">&nbsp;</div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">I</div>
          <div className="inline_ipa">
            <span className="transcribed_word">aɪ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">found</div>
          <div className="inline_ipa">
            <span className="transcribed_word">faʊnd</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">a</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ə</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">lover</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ˈlʌvər</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">,&nbsp;</div>
          <div className="inline_ipa">
            <span className="nontranscriptable">,&nbsp;</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">to</div>
          <div className="inline_ipa">
            <span className="transcribed_word">tu</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">carry</div>
          <div className="inline_ipa">
            <span className="transcribed_word">
              <a id="carry2_val" href="#" onClick={(e)=>rotate(e)} data-toggle="tooltip" data-html="true" title="" data-original-title="1. [ˈkæri]<br />2. [ˈkɛri]">
                ˈkæri
              </a>
            </span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">more</div>
          <div className="inline_ipa">
            <span className="transcribed_word">mɔr</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">than</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ðæn</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">just</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ʤʌst</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">my</div>
          <div className="inline_ipa">
            <span className="transcribed_word">maɪ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">secrets</div>
          <div className="inline_ipa">
            <span className="transcribed_word">
              <a id="secrets2_val" href="#" onClick={(e)=>rotate(e)} data-toggle="tooltip" data-html="true" title="" data-original-title="1. [ˈsikrəts]<br />2. [ˈsikrɪts]">
                ˈsikrəts
              </a>
            </span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa">
            <span className="nontranscriptable" />
          </div>
        </div>
        <div className="clear_both">&nbsp;</div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">To</div>
          <div className="inline_ipa">
            <span className="transcribed_word">tu</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">carry</div>
          <div className="inline_ipa">
            <span className="transcribed_word">
              <a id="carry2_val" href="#" onClick={(e)=>rotate(e)} data-toggle="tooltip" data-html="true" title="" data-original-title="1. [ˈkæri]<br />2. [ˈkɛri]">
                ˈkæri
              </a>
            </span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">love</div>
          <div className="inline_ipa">
            <span className="transcribed_word">lʌv</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">,&nbsp;</div>
          <div className="inline_ipa">
            <span className="nontranscriptable">,&nbsp;</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">to</div>
          <div className="inline_ipa">
            <span className="transcribed_word">tu</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">carry</div>
          <div className="inline_ipa">
            <span className="transcribed_word">
              <a id="carry2_val" href="#" onClick={(e)=>rotate(e)} data-toggle="tooltip" data-html="true" title="" data-original-title="1. [ˈkæri]<br />2. [ˈkɛri]">
                ˈkæri
              </a>
            </span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">children</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ˈʧɪldrən</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">of</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ʌv</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">our</div>
          <div className="inline_ipa">
            <span className="transcribed_word">
              <a id="our3_val" href="#" onClick={(e)=>rotate(e)} data-toggle="tooltip" data-html="true" title="" data-original-title="1. [ˈaʊər]<br />2. [aʊr]<br />3. [ɑr]">
                ˈaʊər
              </a>
            </span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">own</div>
          <div className="inline_ipa">
            <span className="transcribed_word">oʊn</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa">
            <span className="nontranscriptable" />
          </div>
        </div>
        <div className="clear_both">&nbsp;</div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">We</div>
          <div className="inline_ipa">
            <span className="transcribed_word">wi</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">are</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ɑr</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">still</div>
          <div className="inline_ipa">
            <span className="transcribed_word">stɪl</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">kids</div>
          <div className="inline_ipa">
            <span className="transcribed_word">kɪdz</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">,&nbsp;</div>
          <div className="inline_ipa">
            <span className="nontranscriptable">,&nbsp;</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">but</div>
          <div className="inline_ipa">
            <span className="transcribed_word">bʌt</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">we're</div>
          <div className="inline_ipa">
            <span className="transcribed_word">
              <a id="we_re3_val" href="#" onClick={(e)=>rotate(e)} data-toggle="tooltip" data-html="true" title="" data-original-title="1. [wir]<br />2. [wɪr]<br />3. [wɜr]">
                wir
              </a>
            </span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">so</div>
          <div className="inline_ipa">
            <span className="transcribed_word">soʊ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">in</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ɪn</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">love</div>
          <div className="inline_ipa">
            <span className="transcribed_word">lʌv</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa">
            <span className="nontranscriptable" />
          </div>
        </div>
        <div className="clear_both">&nbsp;</div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">Fighting</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ˈfaɪtɪŋ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">against</div>
          <div className="inline_ipa">
            <span className="transcribed_word">
              <a id="against2_val" href="#" onClick={(e)=>rotate(e)} data-toggle="tooltip" data-html="true" title="" data-original-title="1. [əˈɡɛnst]<br />2. [əˈɡeɪnst]">
                əˈɡɛnst
              </a>
            </span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">all</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ɔl</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">odds</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ɑdz</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa">
            <span className="nontranscriptable" />
          </div>
        </div>
        <div className="clear_both">&nbsp;</div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">I</div>
          <div className="inline_ipa">
            <span className="transcribed_word">aɪ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">know</div>
          <div className="inline_ipa">
            <span className="transcribed_word">noʊ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">we'll</div>
          <div className="inline_ipa">
            <span className="transcribed_word">
              <a id="we_ll2_val" href="#" onClick={(e)=>rotate(e)} data-toggle="tooltip" data-html="true" title="" data-original-title="1. [wil]<br />2. [wɪl]">
                wil
              </a>
            </span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">be</div>
          <div className="inline_ipa">
            <span className="transcribed_word">bi</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">alright</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ˌɔlˈraɪt</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">this</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ðɪs</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">time</div>
          <div className="inline_ipa">
            <span className="transcribed_word">taɪm</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa">
            <span className="nontranscriptable" />
          </div>
        </div>
        <div className="clear_both">&nbsp;</div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">Darling</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ˈdɑrlɪŋ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">,&nbsp;</div>
          <div className="inline_ipa">
            <span className="nontranscriptable">,&nbsp;</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">just</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ʤʌst</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">hold</div>
          <div className="inline_ipa">
            <span className="transcribed_word">hoʊld</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">my</div>
          <div className="inline_ipa">
            <span className="transcribed_word">maɪ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">hand</div>
          <div className="inline_ipa">
            <span className="transcribed_word">hænd</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa">
            <span className="nontranscriptable" />
          </div>
        </div>
        <div className="clear_both">&nbsp;</div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">Be</div>
          <div className="inline_ipa">
            <span className="transcribed_word">bi</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">my</div>
          <div className="inline_ipa">
            <span className="transcribed_word">maɪ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">girl</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ɡɜrl</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">,&nbsp;</div>
          <div className="inline_ipa">
            <span className="nontranscriptable">,&nbsp;</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">I'll</div>
          <div className="inline_ipa">
            <span className="transcribed_word">aɪl</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">be</div>
          <div className="inline_ipa">
            <span className="transcribed_word">bi</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">your</div>
          <div className="inline_ipa">
            <span className="transcribed_word">
              <a id="your2_val" href="#" onClick={(e)=>rotate(e)} data-toggle="tooltip" data-html="true" title="" data-original-title="1. [jʊər]: <i>pronoun</i><br />2. [jɔr]: <i>pronoun</i>">
                jʊər
              </a>
            </span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">man</div>
          <div className="inline_ipa">
            <span className="transcribed_word">
              <a id="man2_val" href="#" onClick={(e)=>rotate(e)} data-toggle="tooltip" data-html="true" title="" data-original-title="1. [mæn]: <i>noun, verb</i><br />2. [mən]: <i>suffix</i>">
                mæn
              </a>
            </span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa">
            <span className="nontranscriptable" />
          </div>
        </div>
        <div className="clear_both">&nbsp;</div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">I</div>
          <div className="inline_ipa">
            <span className="transcribed_word">aɪ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">see</div>
          <div className="inline_ipa">
            <span className="transcribed_word">si</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">my</div>
          <div className="inline_ipa">
            <span className="transcribed_word">maɪ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">future</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ˈfjuʧər</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">in</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ɪn</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">your</div>
          <div className="inline_ipa">
            <span className="transcribed_word">
              <a id="your2_val" href="#" onClick={(e)=>rotate(e)} data-toggle="tooltip" data-html="true" title="" data-original-title="1. [jʊər]: <i>pronoun</i><br />2. [jɔr]: <i>pronoun</i>">
                jʊər
              </a>
            </span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">eyes</div>
          <div className="inline_ipa">
            <span className="transcribed_word">aɪz</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa">
            <span className="nontranscriptable" />
          </div>
        </div>
        <div className="clear_both">&nbsp;</div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">Baby</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ˈbeɪbi</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">,&nbsp;</div>
          <div className="inline_ipa">
            <span className="nontranscriptable">,&nbsp;</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">I'm</div>
          <div className="inline_ipa">
            <span className="transcribed_word">
              <a id="i_m2_val" href="#" onClick={(e)=>rotate(e)} data-toggle="tooltip" data-html="true" title="" data-original-title="1. [aɪm]<br />2. [əm]">
                aɪm
              </a>
            </span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">dancing</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ˈdænsɪŋ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">in</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ɪn</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">the</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ðə</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">dark</div>
          <div className="inline_ipa">
            <span className="transcribed_word">dɑrk</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa">
            <span className="nontranscriptable" />
          </div>
        </div>
        <div className="clear_both">&nbsp;</div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">With</div>
          <div className="inline_ipa">
            <span className="transcribed_word">
              <a id="with2_val" href="#" onClick={(e)=>rotate(e)} data-toggle="tooltip" data-html="true" title="" data-original-title="1. [wɪð]<br />2. [wɪθ]">
                wɪð
              </a>
            </span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">you</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ju</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">between</div>
          <div className="inline_ipa">
            <span className="transcribed_word">bɪˈtwin</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">my</div>
          <div className="inline_ipa">
            <span className="transcribed_word">maɪ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">arms</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ɑrmz</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa">
            <span className="nontranscriptable" />
          </div>
        </div>
        <div className="clear_both">&nbsp;</div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">Barefoot</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ˈbɛrˌfʊt</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">on</div>
          <div className="inline_ipa">
            <span className="transcribed_word">
              <a id="on2_val" href="#" onClick={(e)=>rotate(e)} data-toggle="tooltip" data-html="true" title="" data-original-title="1. [ɑn]<br />2. [ɔn]">
                ɑn
              </a>
            </span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">the</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ðə</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">grass</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ɡræs</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa">
            <span className="nontranscriptable" />
          </div>
        </div>
        <div className="clear_both">&nbsp;</div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">Listening</div>
          <div className="inline_ipa">
            <span className="transcribed_word">
              <a id="listening2_val" href="#" onClick={(e)=>rotate(e)} data-toggle="tooltip" data-html="true" title="" data-original-title="1. [ˈlɪsənɪŋ]<br />2. [ˈlɪsnɪŋ]">
                ˈlɪsənɪŋ
              </a>
            </span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">to</div>
          <div className="inline_ipa">
            <span className="transcribed_word">tu</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">our</div>
          <div className="inline_ipa">
            <span className="transcribed_word">
              <a id="our3_val" href="#" onClick={(e)=>rotate(e)} data-toggle="tooltip" data-html="true" title="" data-original-title="1. [ˈaʊər]<br />2. [aʊr]<br />3. [ɑr]">
                ˈaʊər
              </a>
            </span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">favorite</div>
          <div className="inline_ipa">
            <span className="transcribed_word">
              <a id="favorite2_val" href="#" onClick={(e)=>rotate(e)} data-toggle="tooltip" data-html="true" title="" data-original-title="1. [ˈfeɪvərɪt]<br />2. [ˈfeɪvrət]">
                ˈfeɪvərɪt
              </a>
            </span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">song</div>
          <div className="inline_ipa">
            <span className="transcribed_word">sɔŋ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa">
            <span className="nontranscriptable" />
          </div>
        </div>
        <div className="clear_both">&nbsp;</div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">When</div>
          <div className="inline_ipa">
            <span className="transcribed_word">wɛn</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">I</div>
          <div className="inline_ipa">
            <span className="transcribed_word">aɪ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">saw</div>
          <div className="inline_ipa">
            <span className="transcribed_word">sɔ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">you</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ju</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">in</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ɪn</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">that</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ðæt</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">dress</div>
          <div className="inline_ipa">
            <span className="transcribed_word">drɛs</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">,&nbsp;</div>
          <div className="inline_ipa">
            <span className="nontranscriptable">,&nbsp;</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">looking</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ˈlʊkɪŋ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">so</div>
          <div className="inline_ipa">
            <span className="transcribed_word">soʊ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">beautiful</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ˈbjutəfəl</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa">
            <span className="nontranscriptable" />
          </div>
        </div>
        <div className="clear_both">&nbsp;</div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">I</div>
          <div className="inline_ipa">
            <span className="transcribed_word">aɪ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">don't</div>
          <div className="inline_ipa">
            <span className="transcribed_word">
              <a id="don_t2_val" href="#" onClick={(e)=>rotate(e)} data-toggle="tooltip" data-html="true" title="" data-original-title="1. [doʊnt]<br />2. [doʊn]">
                doʊnt
              </a>
            </span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">deserve</div>
          <div className="inline_ipa">
            <span className="transcribed_word">dɪˈzɜrv</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">this</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ðɪs</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa">
            <span className="nontranscriptable" />
          </div>
        </div>
        <div className="clear_both">&nbsp;</div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">Darling</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ˈdɑrlɪŋ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">,&nbsp;</div>
          <div className="inline_ipa">
            <span className="nontranscriptable">,&nbsp;</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">you</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ju</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">look</div>
          <div className="inline_ipa">
            <span className="transcribed_word">lʊk</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">perfect</div>
          <div className="inline_ipa">
            <span className="transcribed_word">
              <a id="perfect2_val" href="#" onClick={(e)=>rotate(e)} data-toggle="tooltip" data-html="true" title="" data-original-title="1. [ˈpɜrˌfɪkt]: <i>adjective, noun</i><br />2. [pərˈfɛkt]: <i>verb</i>">
                ˈpɜrˌfɪkt
              </a>
            </span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">tonight</div>
          <div className="inline_ipa">
            <span className="transcribed_word">
              <a id="tonight2_val" href="#" onClick={(e)=>rotate(e)} data-toggle="tooltip" data-html="true" title="" data-original-title="1. [təˈnaɪt]<br />2. [tuˈnaɪt]">
                təˈnaɪt
              </a>
            </span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa">
            <span className="nontranscriptable" />
          </div>
        </div>
        <div className="clear_both">&nbsp;</div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">Baby</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ˈbeɪbi</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">,&nbsp;</div>
          <div className="inline_ipa">
            <span className="nontranscriptable">,&nbsp;</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">I'm</div>
          <div className="inline_ipa">
            <span className="transcribed_word">
              <a id="i_m2_val" href="#" onClick={(e)=>rotate(e)} data-toggle="tooltip" data-html="true" title="" data-original-title="1. [aɪm]<br />2. [əm]">
                aɪm
              </a>
            </span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">dancing</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ˈdænsɪŋ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">in</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ɪn</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">the</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ðə</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">dark</div>
          <div className="inline_ipa">
            <span className="transcribed_word">dɑrk</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa">
            <span className="nontranscriptable" />
          </div>
        </div>
        <div className="clear_both">&nbsp;</div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">With</div>
          <div className="inline_ipa">
            <span className="transcribed_word">
              <a id="with2_val" href="#" onClick={(e)=>rotate(e)} data-toggle="tooltip" data-html="true" title="" data-original-title="1. [wɪð]<br />2. [wɪθ]">
                wɪð
              </a>
            </span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">you</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ju</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">between</div>
          <div className="inline_ipa">
            <span className="transcribed_word">bɪˈtwin</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">my</div>
          <div className="inline_ipa">
            <span className="transcribed_word">maɪ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">arms</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ɑrmz</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa">
            <span className="nontranscriptable" />
          </div>
        </div>
        <div className="clear_both">&nbsp;</div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">Barefoot</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ˈbɛrˌfʊt</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">on</div>
          <div className="inline_ipa">
            <span className="transcribed_word">
              <a id="on2_val" href="#" onClick={(e)=>rotate(e)} data-toggle="tooltip" data-html="true" title="" data-original-title="1. [ɑn]<br />2. [ɔn]">
                ɑn
              </a>
            </span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">the</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ðə</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">grass</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ɡræs</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa">
            <span className="nontranscriptable" />
          </div>
        </div>
        <div className="clear_both">&nbsp;</div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">Listening</div>
          <div className="inline_ipa">
            <span className="transcribed_word">
              <a id="listening2_val" href="#" onClick={(e)=>rotate(e)} data-toggle="tooltip" data-html="true" title="" data-original-title="1. [ˈlɪsənɪŋ]<br />2. [ˈlɪsnɪŋ]">
                ˈlɪsənɪŋ
              </a>
            </span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">to</div>
          <div className="inline_ipa">
            <span className="transcribed_word">tu</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">our</div>
          <div className="inline_ipa">
            <span className="transcribed_word">
              <a id="our3_val" href="#" onClick={(e)=>rotate(e)} data-toggle="tooltip" data-html="true" title="" data-original-title="1. [ˈaʊər]<br />2. [aʊr]<br />3. [ɑr]">
                ˈaʊər
              </a>
            </span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">favorite</div>
          <div className="inline_ipa">
            <span className="transcribed_word">
              <a id="favorite2_val" href="#" onClick={(e)=>rotate(e)} data-toggle="tooltip" data-html="true" title="" data-original-title="1. [ˈfeɪvərɪt]<br />2. [ˈfeɪvrət]">
                ˈfeɪvərɪt
              </a>
            </span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">song</div>
          <div className="inline_ipa">
            <span className="transcribed_word">sɔŋ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa">
            <span className="nontranscriptable" />
          </div>
        </div>
        <div className="clear_both">&nbsp;</div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">I</div>
          <div className="inline_ipa">
            <span className="transcribed_word">aɪ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">have</div>
          <div className="inline_ipa">
            <span className="transcribed_word">hæv</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">faith</div>
          <div className="inline_ipa">
            <span className="transcribed_word">feɪθ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">in</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ɪn</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">what</div>
          <div className="inline_ipa">
            <span className="transcribed_word">
              <a id="what2_val" href="#" onClick={(e)=>rotate(e)} data-toggle="tooltip" data-html="true" title="" data-original-title="1. [wɑt]<br />2. [wʌt]">
                wɑt
              </a>
            </span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">I</div>
          <div className="inline_ipa">
            <span className="transcribed_word">aɪ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">see</div>
          <div className="inline_ipa">
            <span className="transcribed_word">si</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa">
            <span className="nontranscriptable" />
          </div>
        </div>
        <div className="clear_both">&nbsp;</div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">Now</div>
          <div className="inline_ipa">
            <span className="transcribed_word">naʊ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">I</div>
          <div className="inline_ipa">
            <span className="transcribed_word">aɪ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">know</div>
          <div className="inline_ipa">
            <span className="transcribed_word">noʊ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">I</div>
          <div className="inline_ipa">
            <span className="transcribed_word">aɪ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">have</div>
          <div className="inline_ipa">
            <span className="transcribed_word">hæv</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">met</div>
          <div className="inline_ipa">
            <span className="transcribed_word">mɛt</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">an</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ən</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">angel</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ˈeɪnʤəl</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">in</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ɪn</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">person</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ˈpɜrsən</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa">
            <span className="nontranscriptable" />
          </div>
        </div>
        <div className="clear_both">&nbsp;</div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">And</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ænd</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">she</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ʃi</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">looks</div>
          <div className="inline_ipa">
            <span className="transcribed_word">lʊks</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">perfect</div>
          <div className="inline_ipa">
            <span className="transcribed_word">
              <a id="perfect2_val" href="#" onClick={(e)=>rotate(e)} data-toggle="tooltip" data-html="true" title="" data-original-title="1. [ˈpɜrˌfɪkt]: <i>adjective, noun</i><br />2. [pərˈfɛkt]: <i>verb</i>">
                ˈpɜrˌfɪkt
              </a>
            </span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa">
            <span className="nontranscriptable" />
          </div>
        </div>
        <div className="clear_both">&nbsp;</div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">I</div>
          <div className="inline_ipa">
            <span className="transcribed_word">aɪ</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">don't</div>
          <div className="inline_ipa">
            <span className="transcribed_word">
              <a id="don_t2_val" href="#" onClick={(e)=>rotate(e)} data-toggle="tooltip" data-html="true" title="" data-original-title="1. [doʊnt]<br />2. [doʊn]">
                doʊnt
              </a>
            </span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">deserve</div>
          <div className="inline_ipa">
            <span className="transcribed_word">dɪˈzɜrv</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">this</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ðɪs</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa">
            <span className="nontranscriptable" />
          </div>
        </div>
        <div className="clear_both">&nbsp;</div>
        <div className="inline_unit">
          <div className="inline_orig" />
          <div className="inline_ipa" />
        </div>
        <div className="inline_unit">
          <div className="inline_orig">You</div>
          <div className="inline_ipa">
            <span className="transcribed_word">ju</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">look</div>
          <div className="inline_ipa">
            <span className="transcribed_word">lʊk</span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">perfect</div>
          <div className="inline_ipa">
            <span className="transcribed_word">
              <a id="perfect2_val" href="#" onClick={(e)=>rotate(e)} data-toggle="tooltip" data-html="true" title="" data-original-title="1. [ˈpɜrˌfɪkt]: <i>adjective, noun</i><br />2. [pərˈfɛkt]: <i>verb</i>">
                ˈpɜrˌfɪkt
              </a>
            </span>
          </div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">&nbsp;</div>
          <div className="inline_ipa">&nbsp;</div>
        </div>
        <div className="inline_unit">
          <div className="inline_orig">tonight</div>
          <div className="inline_ipa">
            <span className="transcribed_word">
              <a id="tonight2_val" href="#" onClick={(e)=>rotate(e)} data-toggle="tooltip" data-html="true" title="" data-original-title="1. [təˈnaɪt]<br />2. [tuˈnaɪt]">
                təˈnaɪt
              </a>
            </span>
          </div>
        </div>
        <div className="clear_both">&nbsp;</div>
      </div>
    </div>
  );
};

export default ExploreContainer;
