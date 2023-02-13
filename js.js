let blank = document.getElementById("blank");


blank.style.gridRowStart = "7";
blank.style.gridColumnStart = "7";
blank.style.gridRowEnd = "10"
blank.style.gridColumnEnd = "10";


let start_zone = {
    start_zone_id: ["start_zone1", "start_zone2", "start_zone3", "start_zone4"],
    running_id: ["running1", "running2", "running3", "running4"],
    safe_zone_id: ["safe_zone1", "safe_zone2", "safe_zone3", "safe_zone4"],
    start_zone_row_start: [1, 10, 1, 10],
    start_zone_row_end: [7, 16, 7, 16],
    start_zone_col_start: [1, 10, 10, 1],
    start_zone_col_end: [7, 16, 16, 7],
    running_row_start: [1, 7, 7, 10],
    running_row_end: [7, 10, 10, 16],
    running_col_start: [7, 1, 10, 7],
    running_col_end: [10, 7, 16, 10],
    safe_zone_row_start: [2, 8, 10, 8],
    safe_zone_row_end: [7, 8, 15, 8],
    safe_zone_col_start: [8, 2, 8, 10],
    safe_zone_col_end: [8, 7, 8, 15]
}



let red = {
    token_id: ["red_token_1", "red_token_2", "red_token_3", "red_token_4"],
    token_x: ["2", "2", "5", "5"],
    token_y: ["2", "5", "2", "5"]
}
let blue = {
    token_id: ["blue_token_1", "blue_token_2", "blue_token_3", "blue_token_4"],
    token_x: ["11", "14", "11", "14"],
    token_y: ["2", "2", "5", "5"]
}
let green = {
    token_id: ["green_token_1", "green_token_2", "green_token_3", "green_token_4"],

    token_x: ["11", "14", "11", "14"],
    token_y: ["11", "14", "14", "11"]
}
let yellow = {
    token_id: ["yellow_token_1", "yellow_token_2", "yellow_token_3", "yellow_token_4"],
    token_x: ["2", "2", "5", "5"],
    token_y: ["11", "14", "11", "14"]

}


let set_blocks = (set_blocks_obb) => {
    for (let i = 0; i <= 3; i++) {
        // alert(typeof(obb.token_id[i]));

        let start_zone = document.getElementById(set_blocks_obb.start_zone_id[i]);
        start_zone.style.gridRowStart = set_blocks_obb.start_zone_row_start[i];
        start_zone.style.gridRowEnd = set_blocks_obb.start_zone_row_end[i];
        start_zone.style.gridColumnStart = set_blocks_obb.start_zone_col_start[i];
        start_zone.style.gridColumnEnd = set_blocks_obb.start_zone_col_end[i];


        let running = document.getElementById(set_blocks_obb.running_id[i]);
        running.style.gridRowStart = set_blocks_obb.running_row_start[i];
        running.style.gridRowEnd = set_blocks_obb.running_row_end[i];
        running.style.gridColumnStart = set_blocks_obb.running_col_start[i];
        running.style.gridColumnEnd = set_blocks_obb.running_col_end[i];



        let safe_zone = document.getElementById(set_blocks_obb.safe_zone_id[i]);


        safe_zone.style.gridRowStart = set_blocks_obb.safe_zone_row_start[i];
        safe_zone.style.gridRowEnd = set_blocks_obb.safe_zone_row_end[i];
        safe_zone.style.gridColumnStart = set_blocks_obb.safe_zone_col_start[i];
        safe_zone.style.gridColumnEnd = set_blocks_obb.safe_zone_col_end[i];


    }

}

let take_tokens = (obb) => {
    for (let i = 0; i <= 3; i++) {
        // alert(typeof(obb.token_id[i]));
        let tokens = document.getElementById(obb.token_id[i]);
        tokens.style.gridRowStart = obb.token_x[i];
        tokens.style.gridColumnStart = obb.token_y[i];

    }

}


take_tokens(red)

take_tokens(blue)

take_tokens(green)

take_tokens(yellow)




set_blocks(start_zone);


let ludo_area = document.getElementById("ludo_area");
for (let i = 0; i < 225; i++) {
    let div = document.createElement("div");
    let classes = document.createTextNode("")
    div.appendChild(classes);
    ludo_area.appendChild(div)
}



// ---------------------------------------logic_part ----------------------

let red_value = {



    0: { x: 7, y: 2 },
    1: { x: 7, y: 3 },
    2: { x: 7, y: 4 },
    3: { x: 7, y: 5 },
    4: { x: 7, y: 6 },

    //yellow

    5: { x: 6, y: 7 },
    6: { x: 5, y: 7 },
    7: { x: 4, y: 7 },
    8: { x: 3, y: 7 },
    9: { x: 2, y: 7 },
    10: { x: 1, y: 7 },

    11: { x: 1, y: 8 },

    12: { x: 1, y: 9 },
    13: { x: 2, y: 9 },
    14: { x: 3, y: 9 },
    15: { x: 4, y: 9 },
    16: { x: 5, y: 9 },
    17: { x: 6, y: 9 },
    // /yellow

    //green
    18: { x: 7, y: 10 },
    19: { x: 7, y: 11 },
    20: { x: 7, y: 12 },
    21: { x: 7, y: 13 },
    22: { x: 7, y: 14 },
    23: { x: 7, y: 15 },

    24: { x: 8, y: 15 },

    25: { x: 9, y: 15 },
    26: { x: 9, y: 14 },
    27: { x: 9, y: 13 },
    28: { x: 9, y: 12 },
    29: { x: 9, y: 11 },
    30: { x: 9, y: 10 },
    // /green

    //blue

    31: { x: 10, y: 9 },
    32: { x: 11, y: 9 },
    33: { x: 12, y: 9 },
    34: { x: 13, y: 9 },
    35: { x: 14, y: 9 },
    36: { x: 15, y: 9 },


    37: { x: 15, y: 8 },

    38: { x: 15, y: 7 },
    39: { x: 14, y: 7 },
    40: { x: 13, y: 7 },
    41: { x: 12, y: 7 },
    42: { x: 11, y: 7 },
    43: { x: 10, y: 7 },

    // /blue


    // red

    44: { x: 9, y: 6 },
    45: { x: 9, y: 5 },
    46: { x: 9, y: 4 },
    47: { x: 9, y: 3 },
    48: { x: 9, y: 2 },
    49: { x: 9, y: 1 },

    50: { x: 8, y: 1 },

    51: { x: 8, y: 2 },
    52: { x: 8, y: 3 },
    53: { x: 8, y: 4 },
    54: { x: 8, y: 5 },
    55: { x: 8, y: 6 },
    56: { x: 8, y: 7 },
}


let yellow_value = {





    0: { x: 2, y: 9 },
    1: { x: 3, y: 9 },
    2: { x: 4, y: 9 },
    3: { x: 5, y: 9 },
    4: { x: 6, y: 9 },
    // /yellow

    //green
    5: { x: 7, y: 10 },
    6: { x: 7, y: 11 },
    7: { x: 7, y: 12 },
    8: { x: 7, y: 13 },
    9: { x: 7, y: 14 },
    10: { x: 7, y: 15 },

    11: { x: 8, y: 15 },

    12: { x: 9, y: 15 },
    13: { x: 9, y: 14 },
    14: { x: 9, y: 13 },
    15: { x: 9, y: 12 },
    16: { x: 9, y: 11 },
    17: { x: 9, y: 10 },
    // /green

    //blue

    18: { x: 10, y: 9 },
    19: { x: 11, y: 9 },
    20: { x: 12, y: 9 },
    21: { x: 13, y: 9 },
    22: { x: 14, y: 9 },
    23: { x: 15, y: 9 },


    24: { x: 15, y: 8 },

    25: { x: 15, y: 7 },
    26: { x: 14, y: 7 },
    27: { x: 13, y: 7 },
    28: { x: 12, y: 7 },
    29: { x: 11, y: 7 },
    30: { x: 10, y: 7 },

    // /blue


    // red

    31: { x: 9, y: 6 },
    32: { x: 9, y: 5 },
    33: { x: 9, y: 4 },
    34: { x: 9, y: 3 },
    35: { x: 9, y: 2 },
    36: { x: 9, y: 1 },

    37: { x: 8, y: 1 },

    38: { x: 7, y: 1 },
    39: { x: 7, y: 2 },
    40: { x: 7, y: 3 },
    41: { x: 7, y: 4 },
    42: { x: 7, y: 5 },
    43: { x: 7, y: 6 },

    //yellow

    44: { x: 6, y: 7 },
    45: { x: 5, y: 7 },
    46: { x: 4, y: 7 },
    47: { x: 3, y: 7 },
    48: { x: 2, y: 7 },
    49: { x: 1, y: 7 },

    50: { x: 1, y: 8 },

    51: { x: 2, y: 8 },
    52: { x: 3, y: 8 },
    53: { x: 4, y: 8 },
    54: { x: 5, y: 8 },
    55: { x: 6, y: 8 },
    56: { x: 7, y: 8 },

}


let green_value = {



    // 12: { x: 9, y: 15 },
    0: { x: 9, y: 14 },
    1: { x: 9, y: 13 },
    2: { x: 9, y: 12 },
    3: { x: 9, y: 11 },
    4: { x: 9, y: 10 },
    // /green

    //blue

    5: { x: 10, y: 9 },
    6: { x: 11, y: 9 },
    7: { x: 12, y: 9 },
    8: { x: 13, y: 9 },
    9: { x: 14, y: 9 },
    10: { x: 15, y: 9 },


    11: { x: 15, y: 8 },

    12: { x: 15, y: 7 },
    13: { x: 14, y: 7 },
    14: { x: 13, y: 7 },
    15: { x: 12, y: 7 },
    16: { x: 11, y: 7 },
    17: { x: 10, y: 7 },

    // /blue


    // red

    18: { x: 9, y: 6 },
    19: { x: 9, y: 5 },
    20: { x: 9, y: 4 },
    21: { x: 9, y: 3 },
    22: { x: 9, y: 2 },
    23: { x: 9, y: 1 },

    24: { x: 8, y: 1 },

    25: { x: 7, y: 1 },
    26: { x: 7, y: 2 },
    27: { x: 7, y: 3 },
    28: { x: 7, y: 4 },
    29: { x: 7, y: 5 },
    30: { x: 7, y: 6 },

    //yellow

    31: { x: 6, y: 7 },
    32: { x: 5, y: 7 },
    33: { x: 4, y: 7 },
    34: { x: 3, y: 7 },
    35: { x: 2, y: 7 },
    36: { x: 1, y: 7 },

    37: { x: 1, y: 8 },

    38: { x: 1, y: 9 },
    39: { x: 2, y: 9 },
    40: { x: 3, y: 9 },
    41: { x: 4, y: 9 },
    42: { x: 5, y: 9 },
    43: { x: 6, y: 9 },
    // /yellow

    //green
    44: { x: 7, y: 10 },
    45: { x: 7, y: 11 },
    46: { x: 7, y: 12 },
    47: { x: 7, y: 13 },
    48: { x: 7, y: 14 },
    49: { x: 7, y: 15 },

    50: { x: 8, y: 15 },

    51: { x: 8, y: 14 },
    52: { x: 8, y: 13 },
    53: { x: 8, y: 12 },
    54: { x: 8, y: 11 },
    55: { x: 8, y: 10 },
    56: { x: 8, y: 9 },

}



let blue_value = {

    0: { x: 14, y: 7 },
    1: { x: 13, y: 7 },
    2: { x: 12, y: 7 },
    3: { x: 11, y: 7 },
    4: { x: 10, y: 7 },

    // /blue


    // red

    5: { x: 9, y: 6 },
    6: { x: 9, y: 5 },
    7: { x: 9, y: 4 },
    8: { x: 9, y: 3 },
    9: { x: 9, y: 2 },
    10: { x: 9, y: 1 },

    11: { x: 8, y: 1 },

    12: { x: 7, y: 1 },
    13: { x: 7, y: 2 },
    14: { x: 7, y: 3 },
    15: { x: 7, y: 4 },
    16: { x: 7, y: 5 },
    17: { x: 7, y: 6 },

    //yellow

    18: { x: 6, y: 7 },
    19: { x: 5, y: 7 },
    20: { x: 4, y: 7 },
    21: { x: 3, y: 7 },
    22: { x: 2, y: 7 },
    23: { x: 1, y: 7 },

    24: { x: 1, y: 8 },

    25: { x: 1, y: 9 },
    26: { x: 2, y: 9 },
    27: { x: 3, y: 9 },
    28: { x: 4, y: 9 },
    29: { x: 5, y: 9 },
    30: { x: 6, y: 9 },
    // /yellow

    //green
    31: { x: 7, y: 10 },
    32: { x: 7, y: 11 },
    33: { x: 7, y: 12 },
    34: { x: 7, y: 13 },
    35: { x: 7, y: 14 },
    36: { x: 7, y: 15 },

    37: { x: 8, y: 15 },

    38: { x: 9, y: 15 },
    39: { x: 9, y: 14 },
    40: { x: 9, y: 13 },
    41: { x: 9, y: 12 },
    42: { x: 9, y: 11 },
    43: { x: 9, y: 10 },
    // /green

    //blue

    44: { x: 10, y: 9 },
    45: { x: 11, y: 9 },
    46: { x: 12, y: 9 },
    47: { x: 13, y: 9 },
    48: { x: 14, y: 9 },
    49: { x: 15, y: 9 },


    50: { x: 15, y: 8 },

    51: { x: 14, y: 8 },
    52: { x: 13, y: 8 },
    53: { x: 12, y: 8 },
    54: { x: 11, y: 8 },
    55: { x: 10, y: 8 },
    56: { x: 9, y: 8 },


}


let dice_val = 0;
let dice_value = document.getElementById("dice");
i = 0;

let red_arr = {
    red_token_1_arr: [],
    red_token_2_arr: [],
    red_token_3_arr: [],
    red_token_4_arr: [],
};

let blue_arr = {
    blue_token_1_arr: [],
    blue_token_2_arr: [],
    blue_token_3_arr: [],
    blue_token_4_arr: [],
};

let green_arr = {
    green_token_1_arr: [],
    green_token_2_arr: [],
    green_token_3_arr: [],
    green_token_4_arr: [],
};


let yellow_arr = {
    yellow_token_1_arr: [],
    yellow_token_2_arr: [],
    yellow_token_3_arr: [],
    yellow_token_4_arr: [],
};



let arr = ["red", "blue", "green", "yellow"];
let dice = () => {
    dice_value.disabled = true;

    if (i == 4) {
        i = 0;
    }
    if (i != 4) {
        dice_val = Math.round((Math.random() * 5) + 1);
        dice_value.innerHTML = dice_val;


        if (arr[i] === "red") {
            enable_token(red);
            disable_tokens(blue, green, yellow)
            dice_value.style.backgroundColor = "red"

        }
        else if (arr[i] === "blue") {
            enable_token(blue)
            disable_tokens(red, green, yellow)
            dice_value.style.backgroundColor = "blue"
        }
        else if (arr[i] === "green") {
            enable_token(green)
            disable_tokens(red, blue, yellow)
            dice_value.style.backgroundColor = "green"
        }
        else if (arr[i] === "yellow") {
            enable_token(yellow)
            disable_tokens(red, blue, green)
            dice_value.style.backgroundColor = "yellow"
        }
        i++;
    }
}

let enable_token = (obb_data) => {
    // alert(obb_data.token_id[])
    for (let i = 0; i < obb_data.token_id.length; i++) {
        let disable_false = document.getElementById(obb_data.token_id[i]);
        disable_false.style.height = "85%";
        disable_false.style.width = "75%";
        disable_false.disabled = false;
    }
}


let disable_tokens = (obb_data1, obb_data2, obb_data3) => {
    // alert(obb_data.token_id[])
    for (let i = 0; i < obb_data1.token_id.length; i++) {
        let disable_true1 = document.getElementById(obb_data1.token_id[i]);
        let disable_true2 = document.getElementById(obb_data2.token_id[i]);
        let disable_true3 = document.getElementById(obb_data3.token_id[i]);
        disable_true1.disabled = true;
        disable_true2.disabled = true;
        disable_true3.disabled = true;
    }
}
let disable_token = (obb_data) => {
    // alert(obb_data.token_id[])
    for (let i = 0; i < obb_data.token_id.length; i++) {
        let disable_true = document.getElementById(obb_data.token_id[i]);
        disable_true.disabled = true;
        disable_true.style.height = "80%";
        disable_true.style.width = "70%";

    }
}
let sum_arr = (arr_name) => {
    let total_value = 0;
    for (let i = 0; i < arr_name.length; i++) {
        total_value += arr_name[i];

    }
    return total_value;
}

let choose_id = (token_id, group, group_arr) => {
    let ret_val;
    for (let i = 0; i < group.token_id.length; i++) {
        if (token_id == group.token_id[i]) {
            ret_val = Object.keys(group_arr)[i];
        }
    }
    return ret_val;
}
let red_dice = (red_token_id) => {
    let my_token_id = choose_id(red_token_id, red, red_arr);
    red_arr[my_token_id].push(dice_val);
    let run_step = sum_arr(red_arr[my_token_id]);
    let red_token = document.getElementById(red_token_id);
    red_token.style.gridRowStart = red_value[run_step].x;
    red_token.style.gridColumnStart = red_value[run_step].y;
    dice_value.style.backgroundColor = "blue"
    dice_value.disabled = false;
    dice_value.innerText = "";
    disable_token(red)

}
let blue_dice = (blue_token_id) => {
    let my_token_id = choose_id(blue_token_id, blue, blue_arr);
    blue_arr[my_token_id].push(dice_val);
    let run_step = sum_arr(blue_arr[my_token_id]);
    let blue_token = document.getElementById(blue_token_id);
    blue_token.style.gridRowStart = blue_value[run_step].x;
    blue_token.style.gridColumnStart = blue_value[run_step].y;
    dice_value.style.backgroundColor = "green"
    dice_value.disabled = false;
    dice_value.innerText = "";
    disable_token(blue)

}
let green_dice = (green_token_id) => {
    let my_token_id = choose_id(green_token_id, green, green_arr);
    green_arr[my_token_id].push(dice_val);
    let run_step = sum_arr(green_arr[my_token_id]);
    let green_token = document.getElementById(green_token_id);
    green_token.style.gridRowStart = green_value[run_step].x;
    green_token.style.gridColumnStart = green_value[run_step].y;
    dice_value.style.backgroundColor = "yellow"
    dice_value.disabled = false;
    dice_value.innerText = "";
    disable_token(green)
}
let yellow_dice = (yellow_token_id) => {
    let my_token_id = choose_id(yellow_token_id, yellow, yellow_arr);
    yellow_arr[my_token_id].push(dice_val);
    let run_step = sum_arr(yellow_arr[my_token_id]);
    let yellow_token = document.getElementById(yellow_token_id);
    yellow_token.style.gridRowStart = yellow_value[run_step].x;
    yellow_token.style.gridColumnStart = yellow_value[run_step].y;
    dice_value.style.backgroundColor = "red"
    dice_value.disabled = false;
    dice_value.innerText = "";
    disable_token(yellow)

}