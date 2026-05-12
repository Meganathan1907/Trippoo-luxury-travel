interface PriceTagProps { price: number; originalPrice?: number; suffix?: string }
export default function PriceTag({ price, originalPrice, suffix = "/person" }: PriceTagProps) {
  return (
    <div>
      {originalPrice && (
        <p className="text-gray-400 text-sm line-through">${originalPrice}{suffix}</p>
      )}
      <p className="font-display text-2xl font-bold text-charcoal">
        ${price}<span className="text-sm font-normal text-gray-400">{suffix}</span>
      </p>
    </div>
  );
}
