import * as state from './gameState.js'

var init = function() {
    $('#summary').text("Summary...")
}

var update = function() {
    var stats = state.stats()
    var statusEle = $("<p>").html("<b>Status:</b> " + stats.status)
    var totalEle = $("<p>").html("<b>Total Symbols:</b> " + stats.totalSymbols)
    var successEle = $("<p>").html("<b>Symbols Matched:</b> " + stats.successCount)
    var trialsEle = $("<p>").html("<b>Trials left:</b> " + stats.trialsLeft)
    $('#summary').html('')
    $('#summary').append(statusEle).append(totalEle).append(successEle).append(trialsEle)
}

export { init, update }