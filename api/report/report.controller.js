const {
    checkUserId,
    reportUser
} = require("./report.service");

module.exports = {
    reportUser: (req, res) => {
        const body = req.body;
        if(body.accountId === undefined || body.reason === undefined || body.roleId === undefined){
            return res.json({
                success: 0,
                data: "error, request doesn't complete."
            });
        }
        const accountId = body.accountId
        const reason = body.reason
        const roleId = body.roleId
        var table=""
        if(reason < 1 || reason > 3){
            return res.json({
                success: 0,
                data: "error, undefined reason."
            });
        }
        switch (roleId){
            case 2:
                table = "tourguide";
                break;
            case 3:
                table = "tourist";
                break;
            default:
                return res.json({
                    success: 0,
                    data: "error, undefined user role."
                });
                break;
        }
        checkUserId(accountId,table,(err, result)=>{ 
            if (err) {
                console.log(err);
            }
            if (!result) {
                return res.json({
                    success: 0,
                    data: "error, unable to find the user."
                });
            }
            reportUser(accountId,roleId,reason,(err, result)=>{
                if (err) {
                    console.log(err);
                }
                if (!result) {
                    return res.json({
                        success: 0,
                        data: "error, something went wrong."
                    });
                }
                return res.json({
                    success: 1,
                    data: "Success, User account reported successfully."
                });
            })
        })
    }
}