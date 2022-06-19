// デスクトップ画面最小幅
const DESKTOP_MIN_WIDTH = 769;

/**
 * smartphone画面幅であるか
 *
 * @return {boolean}
 */
export function isSP () {
    return window.innerWidth < DESKTOP_MIN_WIDTH;
}

export function getSPMaxSize () {
    return `(max-width: ${DESKTOP_MIN_WIDTH - 1}px)`;
}

export function getPCMinSize () {
    return `(min-width: ${DESKTOP_MIN_WIDTH}px)`;
}
