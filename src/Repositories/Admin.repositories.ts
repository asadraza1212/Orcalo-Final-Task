import { ADMINSchema } from '../Model/Admin.model';
import { IADMIN } from '../types/document/IAdmin';
export class MainAdmin {
    constructor() { }
    getAdmin(_id: string) {
        return ADMINSchema.findById(_id);
    }
    saveAdmin(ADMin: IADMIN) {
        return new ADMINSchema(ADMin).save();
    }
    updateAdmin(Admmin: IADMIN) {
        return ADMINSchema.findByIdAndUpdate(Admmin._id, Admmin, {
            new: true
        });
    }
    deletAdmin(_id: string) {
        return ADMINSchema.findByIdAndDelete(_id);
    }
    getAdminslist() {
        return ADMINSchema.find();
    }
}
