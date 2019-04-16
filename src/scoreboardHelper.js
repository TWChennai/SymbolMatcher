import * as state from './gameState.js'

var init = function() {
    $('#summary').text("Summary...")
}

var update = function() {
    var stats = state.stats()
    $('#summary').text(stats.status + stats.summary)
}

export { init, update }