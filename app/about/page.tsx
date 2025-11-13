import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image'; // Next.js ఇమేజ్ కాంపోనెంట్‌ను ఇంపోర్ట్ చేయండి
import Link from 'next/link'; // Link కాంపోనర్‌ను ఇంపోర్ట్ చేయండి
import { CheckCircle } from 'lucide-react'; // క్వాలిఫికేషన్స్ కోసం ఐకాన్

export const metadata = {
  title: 'About Us - IBC Spoken English',
  description:
    'Learn about K. SRTV Prasad and IBC Spoken English. 25+ years of experience.',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* === 1. మెయిన్ ఇంట్రడక్షన్ సెక్షన్ (ENGLISH) === */}
      <section className="py-5" style={{ marginTop: '80px' }}>
        <div className="container">
          <div className="row align-items-center g-5">
            {/* ఇమేజ్ కాలమ్ */}
            <div className="col-lg-5 col-md-6">
              <Image
                src="/about-home-image.jpg" // 'public' ఫోల్డర్‌లోని ఇమేజ్
                alt="Konakanchi SRTV Prasad, Tutor"
                width={300}
                height={400}
                className="img-fluid rounded-3 shadow-lg"
              />
            </div>

            {/* ఇంగ్లీష్ కంటెంట్ కాలమ్ */}
            <div className="col-lg-7 col-md-6">
              <h1 className="display-5 fw-bold mb-3">
                Welcome to IBC Spoken English
              </h1>
              <p className="lead text-muted mb-4">
                My name is <strong>Konakanchi SRTV Prasad</strong>, and I am
                delighted to introduce myself as a tutor specializing in Spoken
                Hindi and English at various levels—basic, intermediate, and
                advanced.
              </p>
              <p className="mb-4">
                I also provide training in business communication, soft skills,
                interview preparation, and corporate training. With{' '}
                <strong>25 years</strong> of teaching and training experience, I
                have had the privilege of working with students, employees,
                business professionals, and homemakers.
              </p>
              <p className="mb-4">
                My goal is to support you in achieving fluency and confidence
                in English. I am here to assist you in enhancing your body
                language, tone, and gestures to boost your personality and
                confidence, all of which are crucial for attaining your dream
                job.
              </p>
              <Link
                href="/contact"
                className="btn btn-primary btn-lg rounded-pill px-4 shadow-sm"
              >
                Book Your Free Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* === 2. క్వాలిఫికేషన్స్ సెక్షన్ (ENGLISH) === */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="text-center section-heading mb-5">
                My Qualifications & Approach
              </h2>
              {/* ఐకాన్స్‌తో కూడిన లిస్ట్ */}
              <ul className="list-unstyled mb-0">
                <li className="d-flex mb-3">
                  <CheckCircle className="text-primary me-3 mt-1" size={24} />
                  <span className="text-muted">
                    <strong>Over 25 years of experience</strong> as a Spoken English
                    faculty member, successfully training professionals from
                    various sectors.
                  </span>
                </li>
                <li className="d-flex mb-3">
                  <CheckCircle className="text-primary me-3 mt-1" size={24} />
                  <span className="text-muted">
                    Strong presentation skills and the ability to conduct
                    <strong> large-scale training sessions</strong> effectively.
                  </span>
                </li>
                <li className="d-flex mb-3">
                  <CheckCircle className="text-primary me-3 mt-1" size={24} />
                  <span className="text-muted">
                    A record of mentoring and coaching students from{' '}
                    <strong>diverse age groups</strong> (middle school to
                    postgraduate).
                  </span>
                </li>
                <li className="d-flex mb-3">
                  <CheckCircle className="text-primary me-3 mt-1" size={24} />
                  <span className="text-muted">
                    <strong>Result-oriented approach</strong> paired with excellent
                    communication and interpersonal skills.
                  </span>
                </li>
                <li className="d-flex mb-3">
                  <CheckCircle className="text-primary me-3 mt-1" size={24} />
                  <span className="text-muted">
                    Well-equipped to teach English from{' '}
                    <strong>Telugu and Hindi</strong> with a strong emphasis on
                    achieving results.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* === 3. గ్యారెంటీ సెక్షన్ (ENGLISH) === */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div
                className="card border-0 shadow-lg"
                style={{ backgroundColor: 'var(--primary-blue)' }}
              >
                <div className="card-body p-5 text-white">
                  <h3 className="text-white fw-bold mb-3">
                    Our Satisfaction Guarantee
                  </h3>
                  <p className="lead mb-0">
                    To demonstrate my confidence in the quality of my
                    instruction, I offer a satisfaction guarantee: if my class
                    does not meet your expectations, I will gladly{' '}
                    <strong>refund your fee</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* === 4. కొత్తగా జోడించిన తెలుగు కంటెంట్ సెక్షన్ === */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="section-heading text-center mb-4">మా గురించి (Telugu)</h2>
              <div className="card shadow-sm">
                <div className="card-body p-4 p-md-5">
                  <p className="text-muted" style={{ lineHeight: 1.8 }}>
                    ప్రియమైన విద్యార్థి, ఈ సందేశం మిమ్మల్ని బాగా కనుగొంటుందని నేను ఆశిస్తున్నాను. నా పేరు కోనకంచి SRTV ప్రసాద్, మరియు వివిధ స్థాయిలలో—బేసిక్, ఇంటర్మీడియట్ మరియు అడ్వాన్స్ డ్ లో స్పోకెన్ హిందీ మరియు ఇంగ్లీషులో ప్రత్యేకత కలిగిన ట్యూటర్ గా నన్ను నేను పరిచయం చేసుకున్నందుకు సంతోషిస్తున్నాను. నేను బిజినెస్ కమ్యూనికేషన్, సాఫ్ట్ స్కిల్స్, ఇంటర్వ్యూ ప్రిపరేషన్ మరియు కార్పొరేట్ ట్రైనింగ్ లో కూడా శిక్షణ ఇస్తాను. 20 సంవత్సరాల బోధన మరియు శిక్షణ అనుభవంతో, నేను విద్యార్థులు, ఉద్యోగులు, వ్యాపార నిపుణులు మరియు గృహిణులతో కలిసి పనిచేసే అధికారాన్ని కలిగి ఉన్నాను.
                    <br/><br/>
                    ఆంగ్లంలో పటిమ మరియు విశ్వాసాన్ని సాధించడంలో మీకు మద్దతు ఇవ్వడమే నా లక్ష్యం. మీ వ్యక్తిత్వం మరియు విశ్వాసాన్ని పెంపొందించడానికి మీ బాడీ లాంగ్వేజ్, టోన్ మరియు సంజ్ఞలను మెరుగుపరచడంలో మీకు సహాయం చేయడానికి నేను ఇక్కడ ఉన్నాను, ఇవన్నీ మీ కలల పనిని సాధించడానికి కీలకమైనవి. కార్పొరేట్ ఉద్యోగుల కోసం, నేను ప్రెజెంటేషన్ టెక్నిక్ లు, పబ్లిక్ స్పీకింగ్, కస్టమర్ సర్వీస్ మరియు అవసరమైన సాఫ్ట్ స్కిల్స్ పై దృష్టి సారించే శిక్షణా సెషన్ లను అందిస్తున్నాను. ఆసక్తి ఉన్న ఎవరికైనా వారి ప్రస్తుత స్థాయి విద్యతో సంబంధం లేకుండా, పటిమలో మెరుగుదలని పెంపొందించడానికి సరళమైన మరియు సమర్థవంతమైన పద్ధతులను ఉపయోగించి బోధించడానికి నేను కట్టుబడి ఉన్నాను.
                    <br/><br/>
                    <strong>ఇక్కడ నా అర్హతలు కొన్ని ఉన్నాయి:</strong><br/>
                    - స్పోకెన్ ఇంగ్లీష్ ఫ్యాకల్టీ మెంబర్ గా 25 సంవత్సరాల అనుభవం, వివిధ రంగాలకు చెందిన నిపుణులకు విజయవంతంగా శిక్షణ ఇవ్వడం.<br/>
                    - బలమైన ప్రదర్శన నైపుణ్యాలు మరియు పెద్ద ఎత్తున శిక్షణా సెషన్ లను సమర్థవంతంగా నిర్వహించగల సామర్థ్యం.<br/>
                    - విభిన్న వయసుల విద్యార్థులకు మార్గదర్శకత్వం మరియు శిక్షణ ఇచ్చిన రికార్డు.<br/>
                    - అద్భుతమైన కమ్యూనికేషన్ మరియు వ్యక్తుల మధ్య నైపుణ్యాలతో జత చేయబడిన ఫలిత-ఆధారిత విధానం. నేను చురుగ్గా మరియు శ్రద్ధగా మరియు సమయానికి పనులను పూర్తి చేయడానికి అంకితభావంతో ఉన్నాను, ప్రతి వివరాలపై శ్రద్ధ చూపుతున్నాను.
                    <br/><br/>
                    సీనియర్ ఫ్యాకల్టీ మెంబర్ తో సహకరించడానికి మీ ఆహ్వానాన్ని నేను నిజంగా అభినందిస్తున్నాను మరియు మా భాగస్వామ్యం యొక్క సంభావ్యత గురించి నేను ఉత్సాహంగా ఉన్నాను. నా అనుభవం మరియు అర్హతలు మీ లక్ష్యాలను సాధించడానికి మరియు మీ సంస్థ వృద్ధికి గణనీయంగా దోహదపడతాయని నేను నమ్ముతున్నాను. మీ పెట్టుబడిపై మీకు సానుకూల రాబడిని అందించాలని నేను లక్ష్యంగా పెట్టుకున్నాను.
                    <br/><br/>
                    అవకాశం ఇస్తే, నా బోధనా పద్ధతులు మరియు అంకితభావం యొక్క ప్రభావాన్ని ప్రదర్శించడానికి డెమో క్లాస్ నిర్వహించడానికి నేను ఆసక్తిగా ఉంటాను.
                    <br/><br/>
                    సృజనాత్మక మరియు ఆకర్షణీయమైన విధానాల ద్వారా నా విద్యార్థులు మరియు ప్రేక్షకుల ప్రత్యేక అవసరాలను తీర్చడానికి నేను కట్టుబడి ఉన్నాను. నా బోధనా అనుభవం మిడిల్ స్కూల్ నుండి పోస్ట్ గ్రాడ్యుయేట్ స్థాయిల వరకు అనేక రకాల వయస్సుల సమూహాలను కలిగి ఉంది మరియు నేను అనేక ప్రశంసలు మరియు సానుకూల మూల్యాంకనాలను పొందడం అదృష్టంగా భావించాను.
                    <br/><br/>
                    <strong>సంతృప్తి హామీ:</strong> నా సూచనల నాణ్యతపై నా విశ్వాసాన్ని ప్రదర్శించడానికి, నేను సంతృప్తి హామీని అందిస్తున్నాను: నా తరగతి మీ అంచనాలను అందుకోకపోతే, నేను మీ రుసుమును సంతోషంగా తిరిగి చెల్లిస్తాను.
                    <br/><br/>
                    నా సూచన తయారీ మరియు వ్యూహాత్మక శిక్షణలో ఆధారపడి ఉంటుంది. 44 ఏళ్ల దక్షిణ భారత పురుషుడిగా, ఫలితాలను సాధించడంలో బలమైన ప్రాధాన్యతతో తెలుగు మరియు హిందీ నుండి ఇంగ్లీష్ బోధించడానికి నేను బాగా సన్నద్ధమయ్యాను.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* === 5. కొత్తగా జోడించిన హిందీ కంటెంట్ సెక్షన్ === */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="section-heading text-center mb-4">हमारे बारे में (Hindi)</h2>
              <div className="card shadow-sm">
                <div className="card-body p-4 p-md-5">
                  <p className="text-muted" style={{ lineHeight: 1.8 }}>
                    प्रिय छात्र, मुझे आशा है कि यह संदेश आपको अच्छा लगेगा। मेरा नाम कोनाकांची एसआरटीवी प्रसाद है, और मुझे विभिन्न स्तरों —बुनियादी, मध्यवर्ती और उन्नत पर बोली जाने वाली हिंदी और अंग्रेजी में विशेषज्ञता वाले ट्यूटर के रूप में खुद को पेश करने में खुशी हो रही है। मैं व्यावसायिक संचार, सॉफ्ट स्किल्स, साक्षात्कार तैयारी और कॉर्पोరేట్ प्रशिक्षण में भी प्रशिक्षण प्रदान करता हूं। 20 वर्षों के शिक्षण और प्रशिक्षण अनुभव के साथ, मुझे छात्रों, कर्मचारियों, व्यावसायिक पेशेवरों और गृहणियों के साथ काम करने का सौभाग्य मिला है।
                    <br/><br/>
                    मेरा लक्ष्य अंग्रेजी में प्रवाह और आत्मविश्वास प्राप्त करने में आपकी सहायता करना है। मैं आपके व्यक्तित्व और आत्मविश्वास को बढ़ाने के लिए आपकी शारीरिक भाषा, स्वर और हाव-भाव को बेहतर बनाने में आपकी सहायता करने के लिए यहां हूं, जो आपके सपनों की नौकरी पाने के लिए महत्वपूर्ण हैं। कॉर्पोरेट कर्मचारियों के लिए, मैं प्रस्तुति तकनीकों, सार्वजनिक भाषण, ग्राहक सेवा और आवश्यक सॉफ्ट कौशल पर केंद्रित प्रशिक्षण सत्र प्रदान करता हूं। मैं रुचि रखने वाले किसी भी व्यक्ति को, उनकी शिक्षा के वर्तमान स्तर की परवाह किए बिना, प्रवाह में सुधार को बढ़ावा देने के लिए सरल और प्रभावी तरीकों का उपयोग करके पढ़ाने के लिए प्रतिबद्ध हूं।
                    <br/><br/>
                    <strong>मेरी कुछ योग्यताएं इस प्रकार हैं:</strong><br/>
                    - स्पोकन इंग्लिश संकाय सदस्य के रूप में 25 वर्षों से अधिक का अनुभव, विभिन्न क्षेत्रों के पेशेवरों को सफलतापूर्वक प्रशिक्षण देना।<br/>
                    - मजबूत प्रस्तुति कौशल और बड़े पैमाने पर प्रशिक्षण सत्रों को प्रभावी ढंग से संचालित करने की क्षमता।<br/>
                    - विभिन्न आयु समूहों के छात्रों को मार्गदर्शन और कोचिंग देने का रिकॉर्ड।<br/>
                    - परिणामोन्मुखी दृष्टिकोण के साथ उत्कृष्ट संचार और पारस्परिक कौशल। मैं सक्रिय हूं और हर विवरण पर ध्यान देते हुए कार्यों को लगन और समय पर पूरा करने के लिए समर्पित हूं।
                    <br/><br/>
                    मैं एक वरिष्ठ संकाय सदस्य के साथ सहयोग करने के आपके निमंत्रण की सचमुच सराहना करता हूँ, और मैं हमारी साझेदारी की संभावनाओं को लेकर उत्साहित हूँ। मेरा मानना है कि मेरा अनुभव और योग्यताएं आपके उद्देश्यों को प्राप्त करने और आपके संगठन के विकास में महत्वपूर्ण योगदान दे सकती हैं। मेरा लक्ष्य आपको आपके निवेश पर सकारात्मक रिटर्न प्रदान करना है।
                    <br/><br/>
                    यदि मुझे अवसर मिले तो मैं अपनी शिक्षण विधियों और समर्पण की प्रभावशीलता को प्रदर्शित करने के लिए एक डेमो क्लास आयोजित करने के लिए उत्सुक होऊंगा।
                    <br/><br/>
                    मैं रचनात्मक और आकर्षक दृष्टिकोण के माध्यम से अपने छात्रों और दर्शकों की विशिष्ट आवश्यकताओं को पूरा करने के लिए प्रतिबद्ध हूं। मेरा शिक्षण अनुभव मिडिल स्कूल से लेकर स्नातकोत्तर स्तर तक विभिन्न आयु समूहों तक फैला हुआ है, और मुझे अनेक प्रशंसाएं और सकारात्मक मूल्यांकन प्राप्त करने का सौभाग्य प्राप्त हुआ है।
                    <br/><br/>
                    <strong>संतुष्टि की गारंटी:</strong> अपने शिक्षण की गुणवत्ता में अपना विश्वास प्रदर्शित करने के लिए, मैं संतुष्टि की गारंटी देता हूं: यदि मेरी कक्षा आपकी अपेक्षाओं पर खरी नहीं उतरती है, तो मैं ख़ुशी से आपकी फीस वापस कर दूंगा।
                    <br/><br/>
                    मेरा निर्देश तैयारी और रणनीतिक प्रशिक्षण पर आधारित है। एक ४४ वर्षीय दक्षिण भारतीय पुरुष के रूप में, मैं परिणाम प्राप्त करने पर जोर देने के साथ तेलुगु और हिंदी से अंग्रेजी पढ़ाने के लिए अच्छी तरह से सुसज्जित हूं।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}