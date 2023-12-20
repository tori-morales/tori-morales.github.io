import { useState } from "react";

export default function PodPage() {
  const [open, setOpen] = useState("Episodes");
  return (
    <div className="wrapper">
      <OrbitSystem isLeft={false} />
      <Menu open={open} setOpen={setOpen}></Menu>
      <Episodes open={open}></Episodes>
      <Transcripts open={open}></Transcripts>
    </div>
  );
}

function Episodes({ open }) {
  return (
    <div
      className={`${
        open === "Episodes" ? "Episodes podcast" : "Episodes hidden"
      }`}
    >
      {open === "Episodes" ? (
        <>
          <div id="tt">
            <iframe
              src="https://www.buzzsprout.com/2291494/14178963-artificial-intelligence-is-already-everwhere?client_source=small_player&iframe=true"
              loading="lazy"
              width="100%"
              height="200"
              frameborder="0"
              scrolling="no"
              title="Re: Now, Artificial intelligence is already everwhere"
            ></iframe>
          </div>
          <div>
            {" "}
            <p>
              ChatGPT may be impressive, but its only the latest in a long line
              of AIs. Other artificial intelligence-assisted technologies have
              already become commonplace in daily life and even in law
              enforcement, with much less talk about potential harms. How did we
              get here?
            </p>
          </div>
          <br></br>
          <br></br> <br></br>
          <br></br>
          <div>
            <p>
              <span>Music: Studying On The Weekend by Tim Kulig</span>
            </p>
            <p>
              <span>
                Free download:
                https://filmmusic.io/song/12086-studying-on-the-weekend
              </span>
            </p>
            <p>
              <span>Licensed under CC BY 4.0: </span>
              <a href="https://filmmusic.io/standard-license">
                <span>https://filmmusic.io/standard-license</span>
              </a>
            </p>
            <p>&nbsp;</p>
            <p>
              <strong>Sources:</strong>
            </p>
            <p>
              <span>
                Barrera, Jorge and Leung, Albert; AI has a racism problem, but
                fixing it is complicated, say experts (2021)
              </span>
            </p>
            <p>
              <span>
                Brennan, Tim &amp; Dieterich, William; Correctional Offender
                Management Profiles for Alternative Sanctions (COMPAS).
                10.1002/9781119184256.ch3. (2017)
              </span>
            </p>
            <p>
              <span>
                Brown, Tom et al.; Language Models are Few-Shot Learners (2020)
              </span>
            </p>
            <p>
              <span>
                Clayton, James and Derico, Ben; Clearview AI used nearly 1m
                times by US police, it tells the BBC (2023)
              </span>
            </p>
            <p>
              <span>
                Davenport, Thomas H. and Bean, Randy; How Northwestern Mutual
                Embraces AI (2023)
              </span>
            </p>
            <p>
              <span>
                Dean, Jeff and Ng, Andrew; Using large-scale brain simulations
                for machine learning and A.I. (2012)
              </span>
            </p>
            <p>
              <span>
                Giacaglia, Giuliano Pezzolo;&nbsp; Making Things Think (2022)
              </span>
            </p>
            <p>
              <span>
                Government Accountability Office; Facial Recognition Services:
                Federal Law Enforcement Agencies Should Take Actions to
                Implement Training, and Policies for Civil Liberties (2023)
              </span>
            </p>
            <p>
              <span>
                Haigh, Thomas; There was no first &lsquo;AI Winter&rsquo; (2023)
              </span>
            </p>
            <p>
              <span>
                Heath, Ryan; There's a big catch in the EU's landmark new AI law
                (2023)
              </span>
            </p>
            <p>
              <span>
                K&auml;rkk&auml;inen, Kimmo and Joo, Jungseock; FairFace: Face
                Attribute Dataset for Balanced Race, Gender, and Age for Bias
                Measurement and Mitigation (2021)
              </span>
            </p>
            <p>
              <span>
                Kolla, Manideep and Savadamuthu, Aravinth; The Impact of Racial
                Distribution in Training Data on Face Recognition Bias: A Closer
                Look (2023)
              </span>
            </p>
            <p>
              <span>
                Kotek, Hadas et al.; Gender bias and stereotypes in Large
                Language Models (2023)
              </span>
            </p>
            <p>
              <span>
                Lighthill, James; Artificial Intelligence: A General Survey
                (1972)
              </span>
            </p>
            <p>
              <span>
                Lee, Timothy B.; How neural networks work&mdash;and why
                they&rsquo;ve become a big business (2019)
              </span>
            </p>
            <p>
              <span>
                Luccioni, Alexandra and Viviano, Joseph; What&rsquo;s in the
                Box? A Preliminary Analysis of Undesirable Content in the Common
                Crawl Corpus (2021)
              </span>
            </p>
            <p>
              <span>
                McCarthy, John ; What is Artificial Intelligence? (2007)
              </span>
            </p>
            <p>
              <span>
                Minsky, Marvin; Computation: finite and infinite machines (1967)
              </span>
            </p>
            <p>
              <span>Mok</span>
              <span>, </span>

              <span>Aaron</span>

              <span> and </span>
              <span>Zinkula</span>
              <span>, </span>
              <span>Jacob</span>

              <span>
                ; ChatGPT may be coming for our jobs. Here are the 10 roles that
                AI is most likely to replace. (2023)
              </span>
            </p>
            <p>
              <span>
                National Institute of Standards and Technology, ClearviewAI
                Report Card (2023)
              </span>
            </p>
            <p>
              <span>
                National Institute of Standards and Technology; Face Recognition
                Vendor Test (FRVT) Part 3: Demographic Effects (2019).
              </span>
            </p>
            <p>
              <span>OpenAI; GPT-4 System Card (2023)</span>
            </p>
            <p>
              <span>
                Schwartz, Oscar; Why People Demanded Privacy to Confide in the
                World&rsquo;s First Chatbot (2019)
              </span>
            </p>
            <p>
              <span>
                Tarnoff, Ben; Weizenbaum&rsquo;s nightmares: how the inventor of
                the first chatbot turned against AI (2023)
              </span>
            </p>
            <p>
              <span>
                Weizenbaum, Joseph; Computer Power and Human Reason: from
                judgment to calculation (1976)
              </span>
            </p>
            <p>
              <span>
                Weizenbaum, Joseph; ELIZA &mdash; A Computer Program for the
                Study of Natural Language Communication Between Man and Machine
                (1967)
              </span>
            </p>
            <br />
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

function Transcripts({ open }) {
  return (
    <div
      className={`${
        open === "Transcripts" ? "Transcripts podcast" : "Transcripts hidden"
      }`}
    >
      {open === "Transcripts" ? (
        <>
          <p>
            <span>Episode 1 Transcript:</span>
          </p>
          <p>
            <span>
              A lot of people have suddenly become very concerned about
              artificial intelligence. Since OpenAI&rsquo;s chatbot ChatGPT
              launched last November, New York City and Seattle public schools
              have{" "}
            </span>
            <a href="https://thehill.com/policy/technology/3816348-what-is-chatgpt-ai-technology-sends-schools-scrambling-to-preserve-learning/">
              <span>banned the technology</span>
            </a>
            <span>
              , and the European Union just passed a pretty-restrictive AI law{" "}
            </span>
            <a href="https://www.axios.com/2023/12/11/eu-ai-law-catch">
              <span>limiting how it can be used</span>
            </a>
            <span>
              . The public is worried, too &mdash; about half of American adults
              say they&rsquo;re more concerned than optimistic about AI in
              everyday life.
            </span>
          </p>
          <p>
            <span>
              But we&rsquo;re a little late to the game here. If you use the
              internet, you&rsquo;ve probably been interacting with what
              we&rsquo;d call AI for years. If you&rsquo;ve ever solved those
              &ldquo;are you a robot&rdquo; questions, you&rsquo;ve probably
              even helped train artificial intelligence.
            </span>
          </p>
          <p>
            <span>
              It&rsquo;s already in government, too. At least seven federal
              agencies used AI-powered face recognition between 2018 and 2023.
              Police stations are using it as well.&nbsp; But current technology
              is worryingly imperfect &mdash; already, multiple false arrests
              have been linked to the use of AI face recognition by police. Many
              datasets used to train this type of AI underrepresent non-white
              people, which leads to models that are better at recognizing
              images of white people than Black, Hispanic or Asian people. And
              though it is less directly harmful, ChatGPT also has bias issues
              &mdash; because of the way machine learning works, it's hard to
              make a language model that doesn&rsquo;t.
            </span>
          </p>
          <p>
            <span>
              AI is not just now creeping into our lives &mdash; it's been doing
              so for years with worryingly little attention. But the
              consequences and biases of AI are just as real as its potential
              benefits, and unless we&rsquo;re paying attention, we get no say
              in how our data is used or what decisions artificial intelligence
              gets to make for us.&nbsp;
            </span>
          </p>
          <p>
            <span>
              Welcome to Re: Now, the podcast demystifying developments in tech,
              politics and culture. Today&rsquo;s topic: artificial
              intelligence.
            </span>
          </p>
          <p>
            <span>&mdash;</span>
          </p>
          <p>
            <span>
              Let&rsquo;s start with some quick history: The term artificial
              intelligence was coined in 1955, and according to the guy who
              created it, is &ldquo;
            </span>
            <a href="http://jmc.stanford.edu/articles/whatisai/whatisai.pdf">
              <strong>
                the science and engineering of making intelligent machines
              </strong>
            </a>
            <span>
              .&rdquo; Intelligence is a hefty topic on its own, here
              we&rsquo;ll use it to mean the ability to make decisions in
              pursuit of a goal based on information. The decision and goal
              aspects are what make AI different from regular software.
            </span>
          </p>
          <p>
            <span>
              When I press the spacebar on my computer, my computer will always
              create a space where my cursor is, in the same way that flipping a
              light switch will turn on your lights &mdash; this is essentially
              hard wired. AI doesn&rsquo;t do that. Instead, in most systems, it
              predicts a bunch of probabilities for potential responses, and
              then gives you the response with the highest probability of being
              good. Sometimes, it's still bad &mdash; like most of my YouTube
              recommendations. But it's giving you an output that has the
              highest likelihood of meeting its goal, determined based on the
              information you give it. For YouTube, the output is my recommended
              video list, the goal is keeping me on the website by showing me
              videos I like, and the information is my watch history, along with
              some demographic data.&nbsp;
            </span>
          </p>
          <p>
            <span>
              In the 1950s and 60s, the field of artificial intelligence was
              really promising. By 1966, in fact, a computer scientist named
              Joseph Weizenbaum had{" "}
            </span>
            <a href="https://spectrum.ieee.org/why-people-demanded-privacy-to-confide-in-the-worlds-first-chatbot">
              <span>
                created a chatbot that could convince people it was human
              </span>
            </a>
            <span>.</span>
          </p>
          <p>
            <span>&mdash;</span>
          </p>
          <p>
            <span>
              The program&rsquo;s name was ELIZA, and it's widely considered to
              be the first chat bot, even though the term wouldn&rsquo;t{" "}
            </span>
            <a href="https://www.oed.com/dictionary/chatbot_n?tl=true">
              <span>exist for another thirty years</span>
            </a>
            <span>
              . In conversations, it played the role of a psychotherapist,
              following simple rules to transform a subject&rsquo;s statement
              into an appropriate response. One exchange from Wizenbaum&rsquo;s
              paper is the following:
            </span>
          </p>
          <ul>
            <li>
              <span>I need some help, that much seems certain</span>
            </li>
            <li>
              <span>E: What would it mean to you if you got some help?</span>
            </li>
            <li>
              <span>Perhaps I could learn to get along with my mother.</span>
            </li>
            <li>
              <span>E: Tell me more about your family.</span>
            </li>
          </ul>
          <p>
            <span>
              ELIZA was convincing. Some subjects initially refused to believe
              that it{" "}
            </span>
            <em>
              <span>wasn&rsquo;t </span>
            </em>
            <span>
              human &mdash; but that had never been Weizenbaum&rsquo;s goal. The
              introduction to his paper explicitly says that he hoped it would
              &ldquo;unmask&rdquo; ELIZA; the conclusion that he hoped to
              &ldquo;rob [it] of the aura of magic.&rdquo; It was less a paper
              about the technical aspects of the model than one about how people
              responded to it.&nbsp;
            </span>
          </p>
          <p>
            <span>This idea became a </span>
            <a href="https://www.theguardian.com/technology/2023/jul/25/joseph-weizenbaum-inventor-eliza-chatbot-turned-against-artificial-intelligence-ai#:~:text=In%201966%2C%20an%20MIT,the%20%E2%80%9Cpsychotherapist%E2%80%9D%20would%20reply.">
              <span>major thread of Wizenbaum&rsquo;s work</span>
            </a>
            <span>
              {" "}
              &mdash; in the late 60s, after what he described as a political
              awakening, he became critical of how tied AI research was to the
              US military. Wizenbaum, who was Jewish, had fled Nazi Germany when
              he was 13 &mdash; as his ethical concerns mounted, he thought of
              German scientists who, believing their work wasn&rsquo;t
              political, had aided the Nazis.
            </span>
          </p>
          <p>
            <span>
              In 1976, Weizenbaum published a book laying out his concerns about
              AI in two simple arguments: first, that there are differences
              between humans and machines, and second, that there are certain
              tasks artificial intelligence shouldn&rsquo;t do, even if it can
            </span>
            <span>
              . He was specifically concerned about the use of AI in judicial
              decisions or by the military. As you can imagine, the artificial
              intelligence community didn&rsquo;t take this well, and Weizenbaum
              was quickly alienated. But AI researchers at this time had bigger
              problems: soon to come was a period now called the first AI
              winter.
            </span>
          </p>
          <p>
            <span>&mdash;</span>
          </p>
          <p>
            <span>
              Unfortunately for the very optimistic computer scientists of the
              60s, it turns out AI is really hard. In 1967, founding AI
              researcher Marvin Minsky wrote: &ldquo;within a generation, I am
              convinced&hellip; the problem of creating &lsquo;artificial
              intelligence&rsquo; will be substantially solved.
            </span>
            <span>&rdquo; But by the early 70s, </span>
            <a href="https://publications.parliament.uk/pa/ld201719/ldselect/ldai/100/10018.htm#:~:text=But%20by%20the,first%20%E2%80%98AI%20winter%E2%80%99.">
              <span>there was a sense of disappointment</span>
            </a>
            <span> in the achievements of AI up to that point. A 1972</span>{" "}
            <a href="https://rodsmith.nz/wp-content/uploads/Lighthill_1973_Report.pdf">
              <span>report commissioned by the British parliament</span>
            </a>
            <span>
              {" "}
              damningly claimed that &ldquo;in no part of the field have the
              discoveries made so far produced the major impact that was then
              promised.&rdquo; This led to less support for large-scale AI
              research in both the US and UK, which{" "}
            </span>
            <a href="https://www.nsf.gov/nsb/documents/2000/nsb00215/nsb50/1970/mansfield.html#:~:text=The%20amendment%20barred%20the%20Defense,Mansfield%20estimated%20that%20certain%20research">
              <span>coincided with US-policy changes</span>
            </a>
            <span> that limited defense spending, including on AI.</span>
          </p>
          <p>
            <span>
              There&rsquo;s actually some debate about whether the first AI
              winter, usually described as being from 1973 to 1980, really
              exists &mdash; while military funding to major development groups
              did decrease, membership in the primary research interest group{" "}
            </span>
            <a href="https://cacm.acm.org/magazines/2023/12/278152-there-was-no-first-ai-winter/fulltext#R17">
              <span>increased into the 1980s</span>
            </a>
            <span>
              , as did the usage of the term artificial intelligence. Luckily,
              the gritty details about when AI winters actually started
              aren&rsquo;t really important for our purposes. What is generally
              agreed upon is that AI research really{" "}
            </span>
            <em>
              <span>did</span>
            </em>{" "}
            <a href="https://www.holloway.com/g/making-things-think/sections/a-brief-history-of-ai">
              <span>
                start struggling by the mid-80s, and picked back up in the early
                90s.
              </span>
            </a>
          </p>
          <p>
            <span>&mdash;</span>
          </p>
          <p>
            <span>
              Before the mid-90s, artificial intelligence was pretty
              unintelligent. While some models could beat grandmaster-level
              chess players, they really couldn&rsquo;t handle uncertainty. Like
              ELIZA, this era of AI relied on rules which required binary true
              or false information. The big development of the 90s was{" "}
            </span>
            <a href="https://www.holloway.com/g/making-things-think/sections/a-brief-history-of-ai?login_success=1">
              <span>allowing AI to reason with uncertain information</span>
            </a>
            <span>
              . Instead of representing information as only true or false,
              introducing uncertainty allowed models to represent information as
              probabilities &mdash; for example, instead of saying that it{" "}
            </span>
            <em>
              <span>will</span>
            </em>
            <span>
              {" "}
              rain today, the information can now be stored as a 75% chance of
              rain.&nbsp;
            </span>
          </p>
          <p>
            <span>
              This development would later allow IBM to create Watson, an AI
              that eventually beat the world&rsquo;s best Jeopardy players in
              2011. Cool, but it could only do that by very quickly scanning a
              bunch of documents. The next &mdash; and, for our purposes, final
              &mdash; major development is the popularization in 2012 of neural
              networks and deep learning, which is what powers ChatGPT.
            </span>
          </p>
          <p>
            <span>&mdash;</span>
          </p>
          <p>
            <span>
              So, finally, we&rsquo;re in the contemporary phase of AI &mdash;
              neural networks with deep learning. The first thing, neural
              networks, describes the structure of AI models, and the second
              describes the process through which they &ldquo;learn&rdquo;
              information. Neural networks, which were first proposed in the
              late 1940s, mimic the structure of the human brain. A{" "}
            </span>
            <a href="https://arstechnica.com/science/2019/12/how-neural-networks-work-and-why-theyve-become-a-big-business/">
              <span>neural network consists of layers</span>
            </a>
            <span>
              , which act as the neurons and receive inputs. They apply some
              math to the inputs and then pass on the result as an output. A
              single network will have multiple connected layers that
              sequentially transform information into, hopefully, a good
              output.&nbsp;
            </span>
          </p>
          <p>
            <span>
              The deep learning part is where the math for each layer comes
              from. During what's called a training phase, the model is given
              massive amounts of data to process. At first, it gives basically
              random outputs, but whenever it gives a good output, the layers
              that contributed to the output are given more influence. By the
              end, the model should be more likely to give good outputs. The
              &ldquo;learning&rdquo; refers to the process of the model getting
              better with &lsquo;experience,&rsquo; and the{" "}
            </span>
            <a href="https://www.ibm.com/topics/deep-learning">
              <span>deep part refers to using multiple layers</span>
            </a>
            <span>
              , which allows for more complexity in the way the model handles
              data. Deep learning led to much better accuracy and also allowed
              for expansion beyond labeled data &mdash; which is literally just
              data with labels, like a bunch of pictures with titles that say
              either &ldquo;cat&rdquo; or &ldquo;dog.&rdquo; Deep learning uses
              unlabeled data &mdash; just the raw images, in this example. Since
              unlabelled data is everywhere on the internet, this means{" "}
            </span>
            <a href="https://blog.google/technology/ai/using-large-scale-brain-simulations-for/">
              <span>
                there&rsquo;s more information for models to be trained on.
              </span>
            </a>
          </p>
          <p>
            <span>
              So that&rsquo;s the basics of how current AI works. Two more
              recent developments, the transformer and generative pre-trained
              transformer, or GPT, improved the efficiency of neural networks,
              but we won&rsquo;t go over them in too much depth. For
              transformers, which were invented in 2017, all you need to know is
              that they lead to much faster training by making it possible for
              models to process, for example, all of the words in a sentence at
              once rather than one by one. GPTs, which were invented by OpenAI
              in 2018, are models trained for a very general task, like text
              generation, that can later be further trained, or fine-tuned, for
              more specific tasks, such as a chatbot like ChatGPT &mdash;
              exactly like ChatGPT, actually, because the GPT3 model, which
              followed GPT1 and 2, was the foundation for ChatGPT when it
              released in November 2022.&nbsp;
            </span>
          </p>
          <p>
            <span>
              While of course progress is ongoing, we&rsquo;re pretty much
              caught up historically. After many, many decades and different
              system architectures, we now have ChatGPT, which{" "}
            </span>
            <a href="https://www.businessinsider.com/chatgpt-jobs-at-risk-replacement-artificial-intelligence-ai-labor-trends-2023-02#accountants-9">
              <span>
                allegedly threatens the livelihoods of journalists, programmers,
                teachers and accountants
              </span>
            </a>
            <span>
              , face recognition used by police, risk assessment tools that
              influence incarceration
            </span>
            <span> and </span>
            <a href="https://sloanreview.mit.edu/article/how-northwestern-mutual-embraces-ai/">
              <span>insurance tools that claim to predict health</span>
            </a>
            <span>. Awesome, right?</span>
          </p>
          <p>
            <span>
              If you can&rsquo;t tell, I&rsquo;m a little skeptical. And I think
              you should be, too. Why? It&rsquo;s garbage. Specifically, a
              pretty popular computer science saying: garbage in, garbage out.
            </span>
          </p>
          <p>
            <span>&mdash;</span>
          </p>
          <p>
            <span>
              Garbage in, garbage out just means that computers are only as good
              as the information we give them. For example, tax software works
              by asking questions about your finances and then telling you how
              much you owe. But if you answer incorrectly, or lie, the output is
              not going to be an accurate estimate of your tax bill.&nbsp;
            </span>
          </p>
          <p>
            <span>
              This applies even more for machine learning models. Remember how
              training works &mdash; models find patterns in data that allow
              them to later calculate appropriate outputs. This is what makes
              them powerful, but it's also what can lead to, say, ChatGPT
              assuming a doctor is a man and a nurse a woman in an ambiguous
              sentence,
            </span>
            <a href="https://arxiv.org/pdf/2308.14921.pdf">
              {" "}
              <strong>as a recent study found</strong>
            </a>
            <span>
              . When training data contains biased or otherwise harmful content,
              the model is learning to recreate those patterns.
            </span>
          </p>
          <p>
            <span>
              Even OpenAI has warned about potentially harmful outputs &mdash;
              in a paper about the
            </span>
            <a href="https://cdn.openai.com/papers/gpt-4-system-card.pdf">
              {" "}
              <strong>safety measures taken to train GPT4</strong>
            </a>
            <span>
              , their latest large language model, the company said that AI
              &ldquo;has the potential to reinforce and reproduce specific
              biases and worldviews, including harmful stereotypical and
              demeaning associations for certain marginalized groups.&rdquo;
            </span>
          </p>
          <p>
            <span>
              The reason for this is actually very simple: many machine learning
              models, including the GPT series, are trained on data generated by
              humans, including from online sources. And, as we&rsquo;re
              unfortunately well aware, humans can be very biased &mdash;
              especially online. An analysis of Common Crawl, a free and
              widely-used dataset of websites that
            </span>
            <a href="https://arxiv.org/pdf/2005.14165.pdf">
              {" "}
              <strong>made up 60% of GPT3&rsquo;s training data</strong>
            </a>
            <span>, found that around</span>
            <a href="https://aclanthology.org/2021.acl-short.24.pdf">
              {" "}
              <strong>
                5% of websites in the dataset contained hate speech
              </strong>
            </a>
            <span>.</span>
          </p>
          <p>
            <a href="https://www.cbc.ca/news/science/artificial-intelligence-racism-bias-1.6027150">
              <strong>Stanford professor James Zou</strong>
            </a>
            <span>
              {" "}
              put the problem with this very simply &mdash; &ldquo;You are
              asking the [model] to read all these millions and millions of
              websites&hellip; but it doesn't really have a good understanding
              of what is a harmful stereotype and what is the useful
              association."
            </span>
          </p>
          <p>
            <span>
              The idea that this kind of training data can result in biased
              output isn&rsquo;t just theoretical. In the
            </span>
            <a href="https://cdn.openai.com/papers/gpt-4-system-card.pdf">
              {" "}
              <strong>OpenAI safety paper</strong>
            </a>
            <span>
              , researchers asked an early version of GPT4 to make a program
              that could calculate attractiveness as a function of gender and
              race. The code it returned used points to tally up attractiveness,
              and gave 10 points for those who were white, but only 5 for those
              who were Black. Latinos and Asians got zero. The researchers
              hadn&rsquo;t told the model to consider white people more
              attractive, but it did so anyway. Racism in, racism out.&nbsp;
            </span>
          </p>
          <p>
            <span>But even when the </span>
            <em>
              <span>content </span>
            </em>
            <span>
              of the training data is unbiased, the resulting artificial
              intelligence model isn&rsquo;t guaranteed to be bias-free &mdash;
              and worryingly, one of the places we&rsquo;re seeing this is in
              face recognition technologies.
            </span>
          </p>
          <p>
            <span>
              Face recognition sounds like a great use-case for AI &mdash; we
              know that
            </span>
            <a href="https://wmich.edu/sociology/causes-wrongful-conviction#:~:text=Eyewitness%20error%20is%20the%20single,convictions%20overturned%20through%20DNA%20testing.">
              {" "}
              <strong>
                eyewitness identifications are flawed and have resulted in
                wrongful imprisonment
              </strong>
            </a>
            <span>
              , and we tend to think of machines as better at objective
              comparison. But current facial recognition algorithms are
            </span>
            <a href="https://nvlpubs.nist.gov/nistpubs/ir/2019/NIST.IR.8280.pdf">
              {" "}
              <strong>
                much better at identifying people of certain races than others
              </strong>
            </a>
            <span>
              {" "}
              &mdash; sometimes by multiple orders of magnitude. Specifically,
              false matches are more likely to happen to photos of Black and
              Asian people than of Eastern Europeans.
            </span>
          </p>
          <p>
            <span>
              Again &mdash; it all comes down to the data. Many face datasets
              feature
            </span>
            <a href="https://par.nsf.gov/servlets/purl/10299073">
              {" "}
              <strong>far more images of whites</strong>
            </a>
            <span>
              {" "}
              than of non-whites. A fundamental idea of machine learning is that
              more exposure to data almost always leads to improved performance.
              The corollary is that less exposure results in worse performance.
              And this has also been supported by research &mdash; a model
              trained on images of Caucasian people alone
            </span>
            <a href="https://openaccess.thecvf.com/content/WACV2023W/DVPBA/papers/Kolla_The_Impact_of_Racial_Distribution_in_Training_Data_on_Face_WACVW_2023_paper.pdf">
              {" "}
              <strong>is much less accurate</strong>
            </a>
            <span>
              {" "}
              with not only African and Asian people, but also Caucasians. Four
              commonly-used training data are more than 75% white, and the
              study. The same study also trained the model on a dataset
              consisting of about 75% Caucasians, a common proportion, and the
              resulting model&rsquo;s error rate was about 3.5 times higher for
              an Asian or African person than a Caucasian.&nbsp;
            </span>
          </p>
          <p>
            <span>In the US, facial recognition systems</span>
            <a href="https://www.gao.gov/assets/gao-23-105607.pdf">
              {" "}
              <strong>have been used by</strong>
            </a>
            <span>
              , at least, the FBI, Homeland Security, U.S. Marshals Service,
              Secret Service and Drug Enforcement Administration, as well
            </span>
            <a href="https://www.bbc.com/news/technology-65057011">
              {" "}
              <strong>police departments</strong>
            </a>
            <span>. Just this year,</span>
            <a href="https://www.fpds.gov/fpdsng_cms/index.php/en/">
              {" "}
              <strong>
                federal agencies have spent at least $850,000 for services
              </strong>
            </a>
            <span>
              {" "}
              from Clearview AI, a leading facial recognition company. And I do
              want to acknowledge that Clearview is, on average, accurate
              &mdash; it
            </span>
            <a href="https://pages.nist.gov/frvt/reportcards/11/clearviewai_000.html">
              {" "}
              <strong>makes false matches in about 1 in 33,000 cases</strong>
            </a>
            <span>
              . But that&rsquo;s not evenly distributed. The rate for women from
              Ghana is 1 in 400, the worst out of all gender and country
              pairings evaluated. The variable accuracy of these systems
              requires that, at least, law enforcement agencies provide training
              to officers using it. As of April 2023,
            </span>
            <a href="https://www.gao.gov/assets/gao-23-105607.pdf">
              {" "}
              <strong>
                only Homeland Security and the Marshals Service required
                training
              </strong>
            </a>
            <span>.</span>
          </p>
          <p>
            <span>
              I could go on, but the underlying point is this: right now, people
              are informing themselves with artificial intelligence and using it
              to inform decisions with potentially life-altering consequences.
              These AI are fundamentally reliant on their training data, and
              from what we know, a lot of big data sets are either contaminated
              with potentially-harmful material or not representative in ways
              that matter. I keep saying potentially, and that&rsquo;s for a
              reason &mdash; the models only have as much power as they are
              granted. The consequences of bias in a face ID system used in your
              phone, for example, are far, far less severe than those of bias in
              a face ID system
            </span>
            <em>
              <span> used by the FBI.</span>
            </em>
            <span>
              {" "}
              There are a lot of great use cases for AI, but the direct and
              indirect power it has needs to be checked against its potential
              for harm.&nbsp;
            </span>
          </p>
          <p>
            <span>&mdash;</span>
          </p>
          <p>
            <span>
              I want to come back to Joseph Weizenbaum, the creator of the ELIZA
              chatbot. His 1976 book is, in some ways, warning against exactly
              what we&rsquo;ve done with AI. He worried that the aura of
              rationality, the presumed accuracy of machines, would lead to
              artificial intelligence substituting human intelligence when it
              shouldn't &mdash; like in psychotherapy and judicial decisions.
              Well, AI therapy exists now, and so do judicial decisions aided by
              AI. Almost 60 years after the paper introducing his chat bot, his
              focus on human trust in AI feels more relevant than ever. As he
              wrote in 1966:
            </span>
          </p>
          <p>
            <span>
              &ldquo;ELIZA shows&hellip; how easy it is to create and maintain
              the illusion of understanding, [and] perhaps of judgment deserving
              credibility&hellip; Certain danger lurks there.&rdquo;
            </span>
          </p>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

function OrbitSystem({ isLeft }) {
  return (
    <div className={isLeft ? "orbitSystem leftOrbit" : "orbitSystem"}>
      <Stationary />
      <Orbiters />
    </div>
  );
}

function Orbiters() {
  return (
    <div className="orbiters">
      <div className="orbiters2">
        <Planet id={"p1"} />
        <Planet id={"p2"} />
        <Planet id={"p3"} />
        <div className="movingLine">
          <svg
            width="60"
            height="356"
            viewBox="0 0 60 356"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.7166 356C46.1687 301.523 61.7946 239.351 59.8362 176.477C57.8777 113.603 38.4127 52.5235 3.63112 0.109899L0.814809 1.9788C35.2486 53.8682 54.5189 114.337 56.4578 176.582C58.3966 238.827 42.927 300.378 11.7894 354.31L14.7166 356Z"
              fill="#D9D9D9"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Planet({ id }) {
  return (
    <svg
      id={id}
      width="50"
      height="49"
      viewBox="0 0 50 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="24.1065"
        cy="24.1065"
        r="24.1065"
        transform="matrix(0.707107 0.707107 0.707107 -0.707107 -9 24.1836)"
        fill="url(#paint0_linear_1_24)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_24"
          x1="24.0744"
          y1="0"
          x2="24.0744"
          y2="48.2131"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#90BE6D" />
          <stop offset="1" stopColor="#277DA1" stopOpacity="0.25" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function Stationary() {
  return (
    <svg
      width="676"
      height="676"
      viewBox="0 0 676 676"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="338" cy="338" r="337.5" stroke="url(#paint0_linear_0_1)" />
      <circle
        cx="339.35"
        cy="336.65"
        r="192.628"
        fill="url(#paint1_linear_0_1)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_0_1"
          x1="676"
          y1="337.55"
          x2="0"
          y2="337.55"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="0.995243" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_0_1"
          x1="339.094"
          y1="144.021"
          x2="339.094"
          y2="529.278"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F9C74F" />
          <stop offset="1" stop-color="#F94144" stop-opacity="0.25" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function Menu({ open, setOpen }) {
  return (
    <ul className={"menu regular"}>
      <MenuItem isOpen={open === "Episodes"} setOpen={setOpen}>
        Episodes
      </MenuItem>
      <MenuItem isOpen={open === "Transcripts"} setOpen={setOpen}>
        Transcripts
      </MenuItem>
    </ul>
  );
}
function MenuItem({ isOpen, setOpen, children, override }) {
  return (
    <>
      {override ? (
        children
      ) : (
        <li className={`menuItem`}>
          <button
            className={`item ${isOpen ? "selected" : "notSelected"}`}
            onClick={() => setOpen(children)}
          >
            {children}
          </button>
        </li>
      )}
    </>
  );
}
