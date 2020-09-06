import mongoose, { Schema } from 'mongoose'

const productSchema = new Schema({
	id: {type: String},
	name: { type: String },
	brand: { type: String },
	// modelProduct: { type: String },
	position: { type: String },
	description: { type: String },
	image: [{ type: String }],
	code: { type: String },
	price: { type: Number },
	category: { type: Schema.Types.ObjectId, ref: 'category' }
})

productSchema.plugin(require('meanie-mongoose-to-json'));

export default mongoose.model('product', productSchema);
