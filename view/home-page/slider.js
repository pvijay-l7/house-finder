"use strict";

import { filter } from "./home-page-handler.js";

const left_slider_thumb = document.querySelector("#slider-1");
const right_slider_thumb = document.querySelector("#slider-2");
const minGap = 0;
const sliderTrack = document.querySelector(".slider-track");
const displayValOne = document.querySelector("#range1");
const displayValTwo = document.querySelector("#range2");
const p_tags = document.querySelectorAll("p");
const wrapper = document.querySelector(".wrapper");

const filter_max_min = {
    price: {
        max: 3_000_000,
        min: 500_000,
        step: 100_000,
    },
    area: {
        max: 6000,
        min: 1000,
        step: 500,
    },
    beds: {
        max: 7,
        min: 1,
        step: 1,
    },
    baths: {
        max: 5,
        min: 1,
        step: 1,
    },
    age: {
        max: 250,
        min: 1,
        step: 1,
    },
    property_area: {
        max: 5,
        min: 0.1,
        step: .1,
    }
}

const handle_left_slider_thumb = () => {
    if (parseInt(right_slider_thumb.value) - parseInt(left_slider_thumb.value) <= minGap) {
        left_slider_thumb.value = parseInt(right_slider_thumb.value) - minGap;
    }

    // TODO: change this
    displayValOne.textContent = left_slider_thumb.value;
    fillColor(right_slider_thumb.max);
}
const handle_right_slider_thumb = () => {
    if (parseInt(right_slider_thumb.value) - parseInt(left_slider_thumb.value) <= minGap) {
        right_slider_thumb.value = parseInt(left_slider_thumb.value) + minGap;
    }

    // TODO: change this
    displayValTwo.textContent = right_slider_thumb.value;
    fillColor(right_slider_thumb.max);
}

const fillColor = (slider_max_val) => {
    const percent1 = (left_slider_thumb.value / slider_max_val) * 100;
    const percent2 = (right_slider_thumb.value / slider_max_val) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , black ${percent1}% , black ${percent2}%, #dadae5 ${percent2}%)`;
    // sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
}

const activate = () => {
    handle_left_slider_thumb();
    handle_right_slider_thumb();

    wrapper.addEventListener('mouseleave', () => {
        wrapper.classList.remove("visible");

        const min = left_slider_thumb.value;
        const max = right_slider_thumb.value;
        const filter_type = wrapper.getAttribute("for")

        filter[filter_type]["min"] = Number(min);
        filter[filter_type]["max"] = Number(max);
        console.log(filter);
    })

    p_tags.forEach(tag => {
        tag.addEventListener('mouseover', () => {
            wrapper.classList.add("visible");
            const { x, y } = tag.getBoundingClientRect();
            const type = tag.getAttribute("type");

            wrapper.style.left = `${x - 120}px`;
            wrapper.style.top = `${y + 60}px`;


            const { max, min, step } = filter_max_min[type];

            wrapper.setAttribute("for", type);

            displayValOne.textContent = min;
            displayValTwo.textContent = max;

            left_slider_thumb.min = min;
            right_slider_thumb.min = min;

            left_slider_thumb.max = max;
            right_slider_thumb.max = max;

            left_slider_thumb.step = step;
            right_slider_thumb.step = step;

            left_slider_thumb.value = min;
            right_slider_thumb.value = max;

        })
    })

    left_slider_thumb.addEventListener("input", () => {
        handle_left_slider_thumb();
    })

    right_slider_thumb.addEventListener("input", () => {
        handle_right_slider_thumb();
    })
}

export { activate }