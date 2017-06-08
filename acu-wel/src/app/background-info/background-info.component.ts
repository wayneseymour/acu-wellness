import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-background-info',
    styleUrls: ['./background-info.component.css'],
    template: `
      <p class="background-info">I am a Doctor of Oriental Medicine and a board certified and licensed
        Acupuncture Physician and functional medicine practitioner. I have served
        the Orlando and Winter Park area for over 16 years. I received my
        certification in acupuncture from the Tai Institute of Oriental Medicine
        and my masters in acupuncture from the National College of Oriental
        Medicine after 4 years of study. I pursued additional training at Zhejiang
        Provincial Hospital in China. There I had the privilege of working with
        Master acupuncturists studying Tui Na massage, pulse reading, Chinese
        herbology and advanced acupuncture techniques. I have also furthered my
        education by studying from renowned physicians including Dr. Richard Tan,
        Dr. Datis Kharrazian and Chris Kresser, M.S., L.Ac. I just completed a
        year long intensive clinician training program with the Kresser Institute
        studying Functional Medicine.<br/>
        <br/>
        I believe in a holistic approach to health, combining acupuncture with
        functional medicine. Functional medicine is personalized care that deals
        with preventing and treating underlying causes, instead of just symptoms,
        for serious chronic disease. It bridges the gap between conventional and
        alternative medicine. It is a science-based field of health care using
        blood, urine, breath and stool testing along with a comprehensive medical
        evaluation to determine the root of health issues. These tests are not
        always necessary, but I offer them if need be. Functional medicine focuses
        on supporting the body naturally with cutting edge neutraceuticals (not
        pharmaceuticals) and detoxification programs. I also encourage a paleo
        based, anti-inflammatory, nutrient dense diet, removing sugar and
        processed grains, especially gluten. I specialize in pain, chronic
        fatigue, adrenal, thyroid and digestive imbalances. With my compassionate
        listening, calming energy and gentle touch, I am devoted to assist you on
        your journey to health.<br/>
        <br/>
        In addition to treating patients, I have studied yoga and meditation for
        the past 20 years and had the privilege of living in a kundalini yoga
        ashram for 8 years. During that time I took two spiritual journeys to
        India where I stayed at Hindu temples, Sikh ashrams and Tibetan
        monasteries and was able to experience the spiritual practices of each of
        those disciplines. I am a certified kundalini and ashtanga yoga instructor
        and taught at the ashram for a few years.<br/>
        <br/>
        My most recent adventure was a trip to Nepal with Acupuncturists Without
        Borders in an international program called World Healing Exchange. We
        offered free acupuncture clinics in Kathmandu and local monasteries,
        learned from traditional healers and provided training to local people. We
        trekked in one of the most profoundly moving mountain ranges in the world
        and had the opportunity to experience sacred places throughout the
        Kathmandu Valley.</p>
    `
})
export class BackgroundInfoComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
